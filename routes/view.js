const router = require("express").Router();
const { notStrictEqual } = require("assert");
const path = require("path");

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirName, "./public/notes.html"));
});

router.get("*", (res, req) => {
  res.sendFile(path.join(__dirname, "..public/index/html"));
});

module.exports = router;
