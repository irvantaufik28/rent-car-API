const express = require("express");
const router = express.Router();
const mediaController = require("../controllers/fotoController");
const upload= require("../libs/mediaHandler")

router.post("/upload", upload.single("image"), mediaController.upload);

module.exports = router;
