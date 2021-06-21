const express = require('express');
const router = express.Router();

// Place Model
const Order = require('../models/order');

// GET all places
router.get('/', async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

// GET an specific place by id
router.get('/:id', async (req, res) => {
  const order = await Order.findById(req.params.id);
  res.json(order);
});

// ADD a new place
router.post('/', async (req, res) => {
  const { places, total, date } = req.body;
  const orderNew = new Order({places, total, date});
  await orderNew.save();
  res.json({status: 'Order Saved'});
});

// UPDATE a new place
router.put('/:id', async (req, res) => {
  const { places, total, date } = req.body;
  const newOrder = { places, total, date };
  await Order.findByIdAndUpdate(req.params.id, newOrder);
  res.json({status: 'Order Updated'});
});

router.delete('/:id', async (req, res) => {
  await Order.findByIdAndRemove(req.params.id);
  res.json({status: 'Order Deleted'});
});

module.exports = router;
