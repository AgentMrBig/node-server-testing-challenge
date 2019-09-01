const express = require('express');

const Hobbits = require('./hobbitsModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const hobbits = await Hobbits.getAll();
        res.json(hobbits);
    } catch (err) {
        res.status(500).json({ message: 'Failed to get hobbits' });
    }
});

router.post('/', async (req, res) => {
    const hobbitData = req.body;

    try {
        const hobbit = await Hobbits.add(hobbitData);
        res.status(201).json(hobbit);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add new hobbit', err });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const deleted = await Hobbits.remove(id);

        if (deleted) {
            res.json({ removed: deleted });
        } else {
            res.status(404).json({ message: 'Could not find hobbit with given id' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete hobbit' });
    }
});

module.exports = router;