const express = require("express");
const dbController = require('../controllers/dbController');
const router = express.Router();

router.get('/:id', dbController.getMyAnswer, (req, res) => {
  console.log('inside get router', res.locals.myAnswer)
  return res.status(200).json(res.locals.myAnswer);
});

router.post('/', dbController.addAnswers, (req, res) => {
  // console.log('inside post router', res.locals.count);
 return  res.status(200).json(res.locals.count);
})

// router.get('/count', dbController.countAnswers, async (req, res) => {
//   console.log("router")
//   res.status(200).json(res.locals.count);

// });

router.get('/', dbController.getAllAnswers, async (req, res) => {
  res.status(200).json(res.locals.answers);
});




module.exports = router;
