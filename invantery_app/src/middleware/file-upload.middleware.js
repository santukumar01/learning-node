// importing multer
import multer from "multer";

// now using multer to store in desination folder the file and give the name

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },

    filename: (req, file, cb) => {
        const name = Date.now() + '-' + file.originalname;
        cb(null, name);
    },
});

export const uploadFile = multer({
    storage: storageConfig
});