import express from "express";

const router = express.Router();


import {uploadImage , getUploadedImage} from "../controllers/imageFunctions.js";


router.post("/upload-image", uploadImage);
router.get("/get-uploaded-Image", getUploadedImage);

module.exports = router;
