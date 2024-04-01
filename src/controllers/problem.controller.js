const NotImplemented = require('../errors/notImplemented.error');

function pingProblemController(req, res) {
    return res.json({message: 'problem controller is up'});
}

function addProblem(req, res) {
    try {
        throw new NotImplemented('addproblem');
    } catch(error) {
        next(error);
    }
}

function getProblem(req, res) {
    try {
        throw new NotImplemented();
    } catch(error) {
        next(error);
    }
}

function getProblems(req, res) {
    try {
        throw new NotImplemented();
    } catch(error) {
        next(error);
    }
}

function deleteProblem(req, res) {
    try {
        throw new NotImplemented();
    } catch(error) {
        next(error);
    }
}

function updateProblem(req, res) {
    try {
        throw new NotImplemented();
    } catch(error) {
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
}