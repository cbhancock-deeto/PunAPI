const router = require("express").Router();
const Joke = require("../models/joke.model");

const jokeArr = [];

randVal = inArr => {
	const rand = Math.random();
	const len = inArr.length;
	return Math.floor(rand * len);
};

var outJoke;
router.route("/").get((req, res) => {
	const joke = Joke.find()
		.then(jokes => {
			res.json(jokes);
		})
		.catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
	const jokeText = req.body.joke;
	const newJoke = new Joke({ joke: jokeText });
	newJoke
		.save()
		.then(() => res.json("Joke added!"))
		.catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
