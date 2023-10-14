const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // File naming
    },

})

const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
      if (file.mimetype === 'image/png' || file.mimetype === 'application/pdf') {
        cb(null, true);
      } else {
        cb(new Error('File type not allowed'));
      }
    },
  });