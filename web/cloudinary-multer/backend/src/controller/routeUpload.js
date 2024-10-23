import express from "express";
import cloudinary from "../utils/cloudinary.js";
import upload from "../middleware/multer.js";
import asyncHandler from "express-async-handler"; // assuming you're using express-async-handler

const router = express.Router();

router.post(
  "/upload",
  upload.single("file"),
  asyncHandler(async (req, res) => {
    try {
      // Uploading the file to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      res.status(200).json({
        success: true,
        message: "Uploaded successfully!",
        data: result,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        success: false,
        message: "Error uploading the file",
      });
    }
  })
);

export default router;
