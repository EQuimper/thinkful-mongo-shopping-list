var express = require('express');
var Item = require('../services/item');
var router = express.Router();

router
	.get('/items', (req, res) => {
		Item.list((items) => {
			res.json(items);
		}, (err) => {
			res.status(400).json(err);
		});
	})
	.post('/items', (req, res) => {
		Item.save(req.body.name, (item) => {
			res.status(201).json(item);
		}, (err) => {
			res.status(400).json(err);
		});
	});

module.exports = router;
