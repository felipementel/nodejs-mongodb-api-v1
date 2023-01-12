const { Person } = require('./person');
const dotenv = require('dotenv')
const connectToDatabase = require('./database/connect')

dotenv.config();

connectToDatabase();

//require('./modules/path')
// require('./modules/fs')
//require('./modules/http');

// const person = new Person("Felipe");
// console.log(person.sayMyName());

require('../modules/express');