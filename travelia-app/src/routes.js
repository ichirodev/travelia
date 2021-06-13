const express = require('express');
const router = express.Router();
// Models
const Location = require('./models/locations');

router.get('/', async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
});

router.get('/:id', async(req, res) => {
    const location = await Location.findById(req.params.id);
    res.json(location);
});

router.post('/', async(req, res) => {
    const { title, place, description, price } = req.body;
    const l = new Location({ title, place, description, price });
    await l.save();
    res.json({status: 'Location saved'});
});

router.put('/:id', async (req, res) => {
    const { title, place, description, price } = req.body;
    const newLocation = { title, place, description, price };
    await Location.findByIdAndUpdate(req.params.id, newLocation);
    res.json({status: 'Location updated'});
});

router.delete('/:id', async(req, res) => {
    await Location.findByIdAndRemove(req.params.id);
    res.json({status: 'Location removed'});
});

module.exports = router;