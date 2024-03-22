const express = require('express');

const v1Router = require('./v1/index');
const problemRouter = require('./v1/problems.routes');

const apiRouter = express.Router();

// If any request comes and route cont. with /v1, we map it to v1Router.
apiRouter.use('/v1', v1Router);

module.exports = apiRouter; 
