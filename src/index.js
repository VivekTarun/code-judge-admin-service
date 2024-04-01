const express = require('express');
const bodyParser = require('body-parser');
const { PORT, ATLAS_DB_URL } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');
const connectToDB = require('./config/db.config');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// If any request comes and route starts with /api, we map it to apiRouter
app.use('/api', apiRouter);

app.get('/ping', (req, res) => {
    return res.json({ message: 'Problem Service is alive' });
})

// Last middle ware if any error comes.
app.use(errorHandler);

app.listen(PORT, async () => {
    console.log(`server started at PORT: ${PORT}`);
    await connectToDB();
    // throw new baseError("some error", 404, "something went wrong");
}); 