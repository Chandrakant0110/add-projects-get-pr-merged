// import multer from "multer";

// const storage = multer.diskStorage({
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });

// export default upload;

import multer from "multer";
import path from "path";

// Multer configuration for file storage
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname); // You can also customize the filename format here
  },
});

// File type validation (only images)
const fileFilter = function (req, file, cb) {
  const fileTypes = /jpeg|jpg|png|gif/; // Allowed file extensions
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase()); // Check extension
  const mimeType = fileTypes.test(file.mimetype); // Check MIME type

  if (extname && mimeType) {
    return cb(null, true);
  } else {
    cb("Error: Only images are allowed!"); // Reject the file if validation fails
  }
};

// Limit the size of the uploaded file to 5MB
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB file size limit
  fileFilter: fileFilter,
});

export default upload;
