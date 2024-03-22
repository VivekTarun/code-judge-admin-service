const express = require('express');
const {problemController} = require('../../controllers/index')

const problemRouter = express.Router();

problemRouter.get('/ping', problemController.pingProblemController);

problemRouter.get('/:id', problemController.getProblem);

problemRouter.get('/', problemController.getProblems);

problemRouter.post('/', problemController.addProblem);

problemRouter.post('/', problemController.deleteProblem);

problemRouter.post('/', problemController.updateProblem);



module.exports = problemRouter;