const router = require("express").Router();
const fs = require("fs");
const path = require("path");
let database = require("../db/db.json");

router.get("/notes", (req, res) => {
  database = JSON.parse(fs.readFileSync(".db/db.json, utf-8"));
  res.json(database);
});

router.post("/notes", (req, res) => {
  let noteContent = {
    title: req.body.title,
    text: req.body.text,
  };
  database.push(noteContent);
  fs.writeFileSync("../db/db.json", JSON.stringify(database));
  res.json(database);
});

module.exports = router;
