const express = require('express');
const mongoose = require('mongoose');
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

const uri = `mongodb+srv://cdw2014:${process.env.DB_PASS}@cluster0-wx2lp.mongodb.net/test`;
mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('good'))
	.catch((err) => console.error(err));

app.listen(port, () => console.log(`Listening on port ${port}`));
