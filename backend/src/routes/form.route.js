const express = require("express");

const app = express.Router();
app.use('/uploads', express.static('uploads'));


app.post('/submit/step1', createBasicDetails);
app.post('/upload', upload.array('files', 3), uploadFile);
app.post('/submit/step3', createMultifeildDroupdown);




module.exports = {
    notesRoute
};