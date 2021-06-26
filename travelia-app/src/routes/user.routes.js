const express = require('express');
const router = express.Router();

// User Model
const User = require('../models/user');

// Get all users
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Get an specific user by id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// Update a user
router.put('/:id', async (req, res) => {
  const { email, password, firstname, lastname, orders } = req.body;
  const newUser = { email, password, firstname, lastname, orders };
  await User.findByIdAndUpdate(req.params.id, newUser);
  res.json({status: 'User Updated'});
});

// Delete a user
router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({status: 'User Deleted'});
});

module.exports = router;
