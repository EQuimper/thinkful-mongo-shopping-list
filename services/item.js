var Item = require('../models/item');

exports.save = (name, cb, errback) => {
	Item.create({
		name
	}, (err, item) => {
		if(err) {
			errback(err);
			return;
		}
		cb(item);
	});
};

exports.list = (cb, errback) => {
	Item.find((err, items) => {
		if(err) {
			errback(err);
			return;
		}
		cb(items);
	});
};
