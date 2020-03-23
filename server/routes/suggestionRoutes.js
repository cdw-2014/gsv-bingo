const router = require('express').Router();
const Suggestion = require('../models/suggestionModel');

router.get('/', (req, res) => {
	Suggestion.find().then((suggestions) => {
		res.json(suggestions);
	});
});

router.get('/:id', (req, res) => {
	Suggestion.find({ id: req.params.id }).then((suggestion) => {
		res.json(suggestion);
	});
});

router.post('/', (req, res) => {
	console.log('called');
	let { name, suggestion } = req.body;
	Suggestion.create({
		name       : name,
		suggestion : suggestion,
		isApproved : false,
		createdAt  : new Date()
	});
});

router.put('/id=:id&isApproved=isApproved', (req, res) => {
	const id = req.params.id;
	Suggestion.updateOne(
		{ _id: id },
		{
			$set : {
				isApproved : req.params.isApproved
			}
		}
	).catch((err) => console.error(err));
});

module.exports = router;
