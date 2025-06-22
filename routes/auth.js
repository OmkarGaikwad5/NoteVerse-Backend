const express = require("express");
const router = express.Router();
const User = require("../models/users");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var fetchuser = require("./middleware/fetchuser");
// Middleware to fetch user from JWT token
const JWT_SECRET = "officialwebsiteofnoteverse";




router.get("/register", (req, res) => {
  res.send("This is the register endpoint. Use POST to register a user.");
});

// Route 1 Create a new user using POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  async (req, res) => {
    console.log("Fired!")
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = await User.create({ name, email, password: hashedPassword });
     

      const data = {
        user: {
          id: newUser.id,
        },
      };
      const jwt_data = jwt.sign(data, JWT_SECRET);

      res.status(201).json({ token: jwt_data });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error", message: err.message });
    }
  }
);

// Route 2 Authenticate a User using POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    check("email", "Enter a valid email").isEmail(),
    check("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email  });
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "Invalid credentials" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      
      
      res.json({ token: authtoken }); // ✅ Only one response
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Server error", message: err.message });
    }
  }
);

// Route 3 Get logged in user details using POST "/api/auth/getuser". Login required

router.post("/getuser", fetchuser,  async (req, res) => { 
  
  
  try {
    const userId = req.user.id; // Assuming req.user is set by middleware after verifying JWT
    const user = await User.findById(userId).select("-password");
    // res.send(user); // Exclude password from the response
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error", message: err.message });
  }
});

module.exports = router;
