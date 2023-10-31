const router = require("express").Router();

const { logRequest } = require("../controllers/analyticsController");

router.post("/", logRequest);

module.exports = router;
