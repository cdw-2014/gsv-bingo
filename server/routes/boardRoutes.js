const router = require('express').Router();
const Board = require('../models/boardModel');

router.get('/', (req, res) => {
	Board.find().then((boards) => {
		res.json(boards);
	});
});

router.get('/:id', (req, res) => {
	Board.find({ _id: req.params.id }).then((board) => {
		res.json(board);
	});
});

router.get('/user/:email', (req, res) => {
	Board.find({ email: req.params.email }).then((boards) => {
		res.json(boards);
	});
});

router.post('/', (req, res) => {
	let { title, type, pieces, email } = req.body;
	let b = Board.create(
		{
			title  : title,
			type   : type,
			pieces : pieces,
			email  : email
		},
		(err, item) => {
			res.send(item._id);
		}
	);
});

router.put('/id=:id&star=:star', (req, res) => {
	const id = req.params.id;
	const star = req.params.star === 'true' ? true : false;
	console.log(star);
	Board.updateOne(
		{ _id: id },
		{
			$set : {
				starred : star
			}
		}
	).catch((err) => console.error(err));
});

module.exports = router;
