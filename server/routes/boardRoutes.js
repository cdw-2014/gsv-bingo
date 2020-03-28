const router = require('express').Router();
const Board = require('../models/boardModel');

router.get('/', (req, res) => {
	Board.find().then((boards) => {
		res.json(boards);
	});
});

router.get('/:id', (req, res) => {
	Board.find({ id: req.params.id }).then((board) => {
		res.json(board);
	});
});

router.post('/', (req, res) => {
	let { title, type, pieces } = req.body;
	Board.create({
		title  : title,
		type   : type,
		pieces : pieces
	});
});

router.put('/id=:id', (req, res) => {
	const id = req.params.id;
	Board.updateOne(
		{ _id: id },
		{
			$set : {
				isApproved : req.params.isApproved
			}
		}
	).catch((err) => console.error(err));
});

module.exports = router;
