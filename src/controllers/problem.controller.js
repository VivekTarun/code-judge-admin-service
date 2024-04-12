const NotImplemented = require('../errors/notImplemented.error');
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');


// connecting problemService and problemRepository.
const problemService = new ProblemService(new ProblemRepository());

function pingProblemController(req, res) {
    return res.json({ message: 'problem controller is up' });
}

async function addProblem(req, res, next) {
    try {
        const newproblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem',
            error: {},
            data: newproblem
        })
    } catch (error) {
        next(error);
    }
}

function getProblem(req, res, next) {
    try {
        throw new NotImplemented('Add problem');
    } catch (error) {
        next(error);
    }
}

async function getProblems(req, res, next) {
    try {
        const response = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json ({
            success: true,
            message: 'successfully featched all the problems',
            error: {},
            data: response
        })
    } catch (error) {
        next(error);
    }
}

function deleteProblem(req, res, next) {
    try {
        throw new NotImplemented('Add problem');
    } catch (error) {
        next(error);
    }
}

function updateProblem(req, res, next) {
    try {
        throw new NotImplemented('Add problem');
    } catch (error) {
        next(error);
    }
}



module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblemController,
};