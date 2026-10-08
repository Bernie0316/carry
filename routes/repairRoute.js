const express = require("express");
const router = express.Router();

const repairController = require("../controllers/repairController");

router.get("/new", (req, res) => {
    res.render("repairs/new");
});

router.post("/", repairController.createRepair);

module.exports = router;