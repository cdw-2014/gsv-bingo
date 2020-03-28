const router = require('express').Router();
const Suggestion = require('../models/suggestionModel');

router.get('/', (req, res) => {
	Suggestion.find().then((suggestions) => {
		res.json(suggestions);
	});
});

const getAtIndex = async (index) => {
	return await Suggestion.find().sort({ _id: 1 }).limit(1).skip(index);
};

router.get('/random/:num', async (req, res) => {
	let { num } = req.params;
	let items = [];
	let indices = [
		...Array(await Suggestion.countDocuments()).keys()
	];
	for (let i = 0; i < num; i++) {
		let index = indices[Math.floor(Math.random() * indices.length)];
		indices = indices.filter((x) => x !== index);
		items.push(await getAtIndex(index));
	}
	res.json(items);
});

router.get('/:id', (req, res) => {
	Suggestion.find({ id: req.params.id }).then((suggestion) => {
		res.json(suggestion);
	});
});

router.post('/', (req, res) => {
	let { name, suggestion, difficulty } = req.body;
	Suggestion.create({
		name       : name,
		suggestion : suggestion,
		type       : 'GSV',
		difficulty : difficulty,
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
