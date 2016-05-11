require('./db/connect');
var express = require('express'),
	bodyParser = require('body-parser'),
	itemRoutes = require('./routes/item'),
	app = express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.use('/', itemRoutes);
app.use('*', (req, res) => {
	res.status(404).json({
		message: 'Not Found'
	});
});

var port = process.env.PORT || 8080;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});

exports.app = app;
