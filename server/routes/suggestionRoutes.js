const router = require('express').Router();
const Suggestion = require('../models/suggestionModel');

router.get('/', (req, res) => {
	Suggestion.find({ score: { $gt: -5 } }).then((suggestions) => {
		res.json(suggestions);
	});
});

router.get('/page=:page&num=:num', async (req, res) => {
	let { page, num } = req.params;
	page = Math.max(1, page);
	Suggestion.find().limit(parseInt(num)).skip(num * (page - 1)).sort({ _id: -1 }).exec().then(async (suggestions) => {
		res.json({ suggestions, maxPages: Math.ceil((await Suggestion.countDocuments()) / num) });
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

const votesFromString = (str) => {
	let data = str.split('--delim--');
	let votes = [];
	data.forEach((v) => {
		const voteData = v.split(',');
		votes.push({ email: voteData[0], score: parseInt(voteData[1]) });
	});
	return votes;
};

router.put('/id=:id&votes=:votes', (req, res) => {
	const id = req.params.id;
	const votes = votesFromString(req.params.votes);
	Suggestion.updateOne(
		{ _id: id },
		{
			$set : {
				votes : votes
			}
		}
	).catch((err) => console.error(err));
});

module.exports = router;
