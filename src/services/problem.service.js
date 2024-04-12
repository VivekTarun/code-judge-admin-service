const sanitizeMarkdownContent = require('../utils/markdownSanitizer');

class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData) {
        try {
            // 1. Sanatize the markdown for  description
            problemData.description = sanitizeMarkdownContent(problemData.description); 

            const problem = await this.problemRepository.createProblem(problemData);
            return problem;
        } catch (err) {
            console.log(err);
            throw err;
        }
    }
}

module.exports = ProblemService;