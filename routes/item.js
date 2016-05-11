var express = require('express');
var router = express.Router();

var Item = require('../models/item');

router
	// Get one item
	.get('/items/:id', (req, res) => {
		Item.findOne({_id: req.params.id}, (err, item) => {
			if(err)
				res.status(404).json({
					message: "Item Not Found!"
				});
			res.status(200).json({item});
		})
	})
	// Get all item
	.get('/items', (req, res) => {
		Item.find((err, items) => {
			if(err)
				res.status(404).json({
					message: "Items Not Found!"
				});
			res.send(items)
		});
	})
	.post('/items', (req, res) => {
		var item = new Item(req.body);

		item.save((err) => {
			if(err)
				res.status(400).json({
					message: "Item Not Created!"
				})
			res.status(200).json({
				message: "Item Created!"
			});
		});
	})
	.put('/items/:id', (req, res) => {
		Item.findOne({_id: req.params.id}, (err, item) => {
			if(err)
				res.send(err);
			for (prop in req.body) {
     			 item[prop] = req.body[prop];
    		}
			item.save((err) => {
				if(err)
					res.send(err)
				res.send('Item Updated!');
			})
		})
	})
	.delete('/items/:id', (req, res) => {
		Item.remove({_id: req.params.id} , (err, item) => {
			if(err)
				res.send(err);
			res.send('Item Removed!');
		});
	});

module.exports = router;
