
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const noteSchema = new Schema({ 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Note = mongoose.model("notes", noteSchema);
module.exports = Note;