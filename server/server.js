const express = require('express');
// const dotenv = require('dotenv');
const path = require('path');
const app = express();
const PORT = 3000;
const answersRouter = require('./routes/answersRouter')

app.use(express.json());

// // dotenv.config();

app.use('/', express.static(path.resolve(__dirname, '../client/public')));

app.use('/answers', answersRouter);

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
