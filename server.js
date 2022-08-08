// Constants to enable software
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const PORT = process.env.PORT || 3001;

// Utilization of software and prep
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start the server
app.listen(PORT, () => console.log("Listening ..."));
