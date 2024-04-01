const mongoose = require('mongoose');
const { ATLAS_DB_URL, NODE_ENV } = require('./server.config');

async function connectToDB() {
    try {
        if(NODE_ENV == "development") {
            await mongoose.connect("mongodb+srv://codejudgeadmin:EltQarKQAHMXDQbJ@cluster0.jh8xtoh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
            console.log("successfully connected to the db");
        }
    } catch (error) {
        console.log('unable to connect to the DB server');
        console.log(error);
    }
}

module.exports = connectToDB;