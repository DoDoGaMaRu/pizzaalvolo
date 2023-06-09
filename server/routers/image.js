const express = require("express");
const multer = require("multer");
const path = require('path');
const router = express.Router();

const storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename : function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({
    storage : storage,
    fileFilter: function (req, file, cb) {
        var ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new Error('PNG, JPG 파일만 업로드 가능합니다.'));
        }
        cb(null, true)
    }
});

// TODO 삭제 예정
router.get("/upload", function (req, res){
    res.render(__dirname + '/../views/upload.ejs')
})

router.post("/upload", upload.single('image'),async (req, res) => {
    const file = req.file
    // Respond with the file details
    res.send({
        message: "Uploaded",
        id: file.id,
        name: file.filename,
        contentType: file.contentType,
    })
})

router.get("/:img", async (req, res) => {
    res.sendFile(path.resolve('./public/images/'+req.params.img));
})

module.exports = router;
