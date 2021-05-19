const express = require("express");
const router = express.Router();

router.use("/", require("./content-router"));
router.use("/", require("./type-router"));
router.use("/", require("./user-router"));

module.exports = router;