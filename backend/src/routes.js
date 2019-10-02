const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

const router = express.Router();
const upload = multer(uploadConfig);

router.post('/sessions', SessionController.store);
router.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = router;