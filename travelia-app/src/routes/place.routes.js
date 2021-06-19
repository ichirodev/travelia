const express = require('express');
const router = express.Router();

// Place Model
const Place = require('../models/place');

// GET all places
router.get('/', async (req, res) => {
  const places = await Place.find();
  res.json(places);
});

// GET an specific place by id
router.get('/:id', async (req, res) => {
  const place = await Place.findById(req.params.id);
  res.json(place);
});

// ADD a new place
router.post('/', async (req, res) => {
  const { title, description, place, sits, date } = req.body;
  const placeNew = new Place({title, description, place, sits, date});
  await placeNew.save();
  res.json({status: 'Place Saved'});
});

// UPDATE a new place
router.put('/:id', async (req, res) => {
  const { title, description, place, sits, date } = req.body;
  const newPlace = {title, description, place, sits, date };
  await Place.findByIdAndUpdate(req.params.id, newPlace);
  res.json({status: 'Place Updated'});
});

router.delete('/:id', async (req, res) => {
  await Place.findByIdAndRemove(req.params.id);
  res.json({status: 'Place Deleted'});
});

module.exports = router;
