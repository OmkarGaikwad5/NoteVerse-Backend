const express = require("express");
const router = express.Router();
var fetchuser = require("./middleware/fetchuser");
const Notes = require("../models/notes");
const { check, validationResult } = require("express-validator");

//Route 1: Add a new note using POST "/api/notes/addnote". Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  // Fetch all notes for the logged-in user
  const userId = req.user.id; // Get user ID from the request object
  const notes = await Notes.find({ user: userId });
  res.json(notes);
});

//Route 2: Add a new note using POST "/api/notes/addnote". Login required
router.post(
  "/addnote",
  fetchuser,
  async (req, res) => {
    // Create a new note for the logged-in user
    const { title, description, tag } = req.body;
    const userId = req.user.id; // Get user ID from the request object

    try {
      const newNote = new Notes({
        title,
        description,
        tag,
        user: userId, // Associate the note with the logged-in user
      });
      const savedNote = await newNote.save();
      res.json(savedNote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//Route 3: Update an existing note using PUT "/api/notes/updatenote/:id". Login required
router.put(
  "/updatenote/:id",
  fetchuser,

  async (req, res) => {
    // Update an existing note for the logged-in user
    const { title, description, tag } = req.body;
    const userId = req.user.id; // Get user ID from the request object
    const noteId = req.params.id; // Get note ID from the request parameters

    const note = await Notes.findById(noteId);;
    if(!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    if (note.user.toString() !== userId) {
      return res.status(403).json({ error: "Access denied" });
    }
    try {
      const updatedNote = await Notes.findByIdAndUpdate(
        noteId,
        { title, description, tag },
        { new: true }
      );
      res.json(updatedNote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

//Route 4: Delete an existing note using DELETE "/api/notes/deletenote/:id". Login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
    const userId = req.user.id;
    const noteId = req.params.id;
  
    try {
      const note = await Notes.findById(noteId); // FIXED
  
      if (!note) {
        return res.status(404).json({ error: "Note not found" });
      }
  
      if (note.user.toString() !== userId) {
        return res.status(403).json({ error: "Access denied" });
      }
  
      await Notes.findByIdAndDelete(noteId);
      res.json({ message: "Note deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.delete('/deleteall', fetchuser, async (req, res) => {
  try {
    await Notes.deleteMany({ user: req.user.id });
    res.json({ success: true, message: 'All notes deleted successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Internal Server Error');
  }
});
  

module.exports = router;
