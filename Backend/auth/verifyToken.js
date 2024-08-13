const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserShema');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401); 
  }

  try {
    console.log('Token:', token); 
    const decoded = jwt.verify(token, process.env.JWT_SECRET_key);
    console.log('Decoded Token:', decoded); 

    const foundUser = await User.findOne({ email: decoded.email });
    if (!foundUser) {
      return res.sendStatus(404); 
    }

    req.user = foundUser;
    console.log('Authenticated User:', req.user.email); 
    next();
  } catch (error) {
    console.error('Authentication Error:', error);
    res.status(403).json({ success: false, message: 'Forbidden', error: error.message });
  }
};

const getUserData = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
};

const verifyUser = async (req, res) => {
  try {
    const user = await getUserData(req.user.email);
    res.json(user);
  } catch (err) {
    console.error('Error fetching user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  authenticateToken,
  verifyUser
};
