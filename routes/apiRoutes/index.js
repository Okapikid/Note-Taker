// Constants for routes
const router = require("express").Router();
const notesRoutes = require("./noteRoutes");

router.use(notesRoutes);

// Export
module.exports = router;
