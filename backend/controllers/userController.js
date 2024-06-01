const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

// Configure Multer for image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });
const jwtSecret = process.env.JWT_SECRET;

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, confirmPassword, address, mobile } = req.body;
    const image = req.file ? req.file.path : '';

    // Check if passwords match
    if (password !== confirmPassword) {
      return res.status(400).send('Passwords do not match');
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send('Email already exists');
    }

    const newUser = new User({ name, email, password, address, mobile, image });
    await newUser.save();
    res.status(201).send(`${name} created successfully`);
  } catch (error) {
    res.status(400).send('Error creating user: ' + error.message);
  }
};

// Login user
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Invalid email or password');
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).send('Invalid email or password');
    }

    // Capitalize the first letter of the user's name
    const capitalizedName = user.name.charAt(0).toUpperCase() + user.name.slice(1);

    // Generate token
    const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
    res.json({ token, name: user.name, email: user.email, message: `${capitalizedName} logged in successfully` });
  } catch (error) {
    res.status(500).send('Error logging in: ' + error.message);
  }
};

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('Error fetching users: ' + error.message);
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Find user by ID and delete
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).send('User not found');
    }
    res.status(200).send('User deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting user: ' + error.message);
  }
};

// Update user details
exports.updateUserDetails = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password, mobile, address, bio } = req.body;
    const profileImage = req.file ? req.file.path : null;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Update user details
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }
    if (mobile) user.mobile = mobile;
    if (profileImage) user.image = profileImage;
    if (address) user.address = address;
    if (bio) user.bio = bio;

    await user.save();

    res.status(200).send('User details updated successfully');
  } catch (error) {
    res.status(500).send('Error updating user details: ' + error.message);
  }
};

// Multer upload middleware for profile image
exports.uploadProfileImage = upload.single('image');
