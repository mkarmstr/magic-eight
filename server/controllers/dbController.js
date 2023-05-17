const { Pool } = require('pg');
require('dotenv').config();
const connection = process.env.DB_URL;
const client = new Pool({
	connectionString: connection
});

client.connect();

const dbController = {
	
	getMyAnswer: async (req, res, next) => {
		const id = req.params.id;
		const myAnswer = await client.query('SELECT answer FROM magicAnswers WHERE id = $1', [id]);
		res.locals.myAnswer = myAnswer.rows[0];
		console.log('inside getMyAnswer: ', 'myAnswer: ', 'myAnswer.rows[0]');
		return next();
	  },

	getAllAnswers: async (req, res, next) => {
		const answers = await client.query('SELECT answer FROM magicAnswers');
		res.locals.answers = answers.rows;
	    // console.log('inside getAllAnswers: ', 'answers.rows: ', answers.rows);
		return next();
	},

	addAnswers: async (req, res, next) => {
		const input = req.body.input;
		// console.log(req.body)
		const answers = await client.query(`INSERT INTO magicAnswers (answer) VALUES ('${input}')`);
		const newAnswers = await client.query('SELECT answer FROM magicAnswers');
		res.locals.count = newAnswers.rows.length;
		// console.log(res.locals.count);
	//   res.locals.answers = answers.rows;
		res.locals.answers = newAnswers.rows[newAnswers.rows.length-1]["answer"];
		// console.log('inside addAnswers', 'answers:', res.locals.answers)
		return next();
	  },	  
	  
	  countAnswers: async (req,res,next) => {
		console.log("middleware")
		const count = await client.query('SELECT COUNT(*) FROM magicAnswers');
		res.locals.count = count;
		return next();
	  }
  };
  

module.exports = dbController;
