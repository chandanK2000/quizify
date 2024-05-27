const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const path = require('path');

// Configure multer for storing uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Register a new user
router.post('/register', userController.registerUser);
// Login user
router.post('/login', userController.loginUser);
// Get all users
router.get('/', userController.getAllUsers);
//delete user
router.delete('/:id', userController.deleteUser);

//update the user details
router.put('/:id', userController.updateUserDetails);


module.exports = router;
