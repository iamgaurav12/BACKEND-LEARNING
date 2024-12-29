const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config");
const fileModel = require("../models/files.models");
const authMiddleware = require("../middlewares/authe");


router.get("/home", authMiddleware , (req, res) => {
  
  
  
    res.render("home");
});


router.post("/upload", authMiddleware , upload.single("file"),async (req, res) => {
    res.send(req.file);

    const newFile = await fileModel.create({
        path: req.file.path,
        originalName: req.file.originalname,
        user: req.user.id, 
    });

    res.json(newFile);
});



module.exports = router;