const express = require('express');
const router = express.Router();
const { Music } = require('../models/Music');
const { User } = require('../models/User');

router.post('/add', (req, res) => {
    const music = new Music(req.body);

    music.save((err, music) => {
        if (err) return res.json({ success: false, err });

        return res.status(200).json({ success: true, music });
    });
});

router.post('/updateMusic', (req, res) => {
    Music.findByIdAndUpdate(req.body.filter, req.body.update, { new: true }).exec((err, music) => {
        if (err) return res.status(400).json({ success: false });
        return res.status(200).json({ success: true, music });
    });
});

router.post('/deleteMusic', (req, res) => {
    Music.findOneAndDelete({ writer: req.body.writer, _id: req.body._id }).exec((err, music) => {
        if (err) return res.status(400).json({ success: false });

        return res.status(200).json({ success: true, music });
    });
});

router.post('/getMusics', (req, res) => {
    Music.find({ writer: req.body.writer }).exec((err, musics) => {
        if (err) return res.status(400).send(err);
        return res.status(200).json({ success: true, musics });
    });
});

module.exports = router;
