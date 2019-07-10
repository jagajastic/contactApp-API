"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
/* GET users listing. */
router.get("/", function (_req, res, _next) {
    res.send("respond with a resource");
});
module.exports = router;
