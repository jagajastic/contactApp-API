"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* GET home page. */
router.get("/", function (_req, res, _next) {
    res.render("index", { title: "Express" });
});
module.exports = router;
