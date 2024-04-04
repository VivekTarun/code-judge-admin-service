const mongoose = require('mongoose')

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        requied: [true, "Title cannot be empty"]
    },
    description: {
        type: String, 
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'difficulty cannot be empty'],
        default: 'easy'  
    },
    testCases: [
        {
            input: {
                type: String,
                requied: true
            },
            output: {
                type: String,
                requied: true
            }
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema); // By this we can me 'Problem' collection in mongoDB Atlas.

module.exports = Problem;

/**
 * [{input: '5, output: '10'}, {input: '2, output: '20}] -> this is the formate of test case. n 
 */