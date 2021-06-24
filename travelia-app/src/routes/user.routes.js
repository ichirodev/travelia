const express = require('express');
const router = express.Router();

// Place Model
const User = require('../models/user');

// GET all places
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// GET an specific place by id
router.get('/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});

// ADD a new place
router.post('/', async (req, res) => {
  const { mail, password, firstname, lastname, registered, loginkey, orders } = req.body;
  const userNew = new User({ mail, password, firstname, lastname, registered, loginkey, orders });
  await userNew.save();
  res.json({status: 'User Saved'});
});

// UPDATE a new place
router.put('/:id', async (req, res) => {
  const { mail, password, firstname, lastname, registered, loginkey, orders } = req.body;
  const newUser = { mail, password, firstname, lastname, registered, loginkey, orders };
  await User.findByIdAndUpdate(req.params.id, newUser);
  res.json({status: 'User Updated'});
});

router.delete('/:id', async (req, res) => {
  await User.findByIdAndRemove(req.params.id);
  res.json({status: 'User Deleted'});
});

module.exports = router;
