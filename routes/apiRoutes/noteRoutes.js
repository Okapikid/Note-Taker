// Constants to enable routes
const router = require("express").Router();
const { notes } = require("../../db/db");
const { newNote } = require("../../lib/functions");

// Information for toures
router.get("/notes", (req, res) => {
  let notepad = notes;
  res.json(notepad);
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();
  let note = newNote(req.body, notes);
  res.json(note);
});

// Export
module.exports = router;
