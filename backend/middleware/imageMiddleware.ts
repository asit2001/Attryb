import { Request, Response, NextFunction } from "express";
import { FileFilterCallback } from "multer";
import multer from "multer";

function fileFilter(
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) {
  if (/^image/.test(file.mimetype)) {
    return cb(null, true);
  }
  cb(new Error("invalid file type"));
}
const upload = multer({ dest: "public/uploads/", fileFilter: fileFilter }).single(
  "image"
);
export default function imageMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  upload(req, res, function (err) {
    if (err) {
      return res.status(400).json({ message: err.message });
    }
    next();
  });
}
