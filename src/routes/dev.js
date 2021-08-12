const router = require("express").Router();
const controller = require("../controllers/dev.js");

router.get("/version", controller.version);

module.exports = router;
