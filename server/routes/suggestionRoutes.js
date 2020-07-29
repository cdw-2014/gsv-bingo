const router = require('express').Router();
const Suggestion = require('../models/suggestionModel');

router.get('/', (req, res) => {
	Suggestion.find().then((suggestions) => {
		res.json(suggestions);
	});
});

const getAtIndex = async (index) => {
	return await Suggestion.find({}, { _id: 1 }).sort({ _id: 1 }).limit(1).skip(index);
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
	Suggestion.find({ _id: req.params.id }).then((suggestion) => {
		res.json(suggestion);
	});
});

router.get('/many/:ids', (req, res) => {
	let { ids } = req.params;
	let checkList = ids.split(',');
	Suggestion.find({ _id: { $in: checkList } }).then((suggestions) => {
		res.json(suggestions);
	});
});

router.post('/', (req, res) => {
	let { name, suggestion, difficulty, email } = req.body;
	Suggestion.create({
		name       : name,
		suggestion : suggestion,
		type       : 'GSV',
		difficulty : difficulty,
		isApproved : false,
		email      : email
	});
});

router.put('/id=:id&vote=vote', (req, res) => {
	const id = req.params.id;
	const vote = parseInt(req.params.vote);
	Suggestion.updateOne(
		{ _id: id },
		{
			$inc : {
				score : req.params.vote
			}
		}
	).catch((err) => console.error(err));
});

module.exports = router;
