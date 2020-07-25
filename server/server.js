const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const suggestionRoutes = require('./routes/suggestionRoutes');
const boardRoutes = require('./routes/boardRoutes.js');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/suggestions', suggestionRoutes);
app.use('/api/boards', boardRoutes);

app.use('/local/user', (req, res) => {
	if (req.body == undefined) {
		res.json(currentUser);
	} else {
		currentUser = req;
	}
});

const uri = `mongodb+srv://cdw2014:${process.env.MONGO_PASSWORD}@cluster0-wx2lp.mongodb.net/test`;
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('good'))
	.catch((err) => console.error(err));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../src/build')));
	// app.get('*', (req, res) => {
	// 	res.sendFile(path.join(__dirname, '../src/build', 'index.html'));
	// });
	app.get('/*', (req, res) => {
		let url = path.join(__dirname, '../src/build', 'index.html');
		if (!url.startsWith('/app/')) url = url.substring(1);
		res.sendFile(url);
	});
}

app.listen(port, () => console.log(`Listening on port ${port}`));
