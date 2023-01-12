const mongoose = require('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect(
        `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@nodejsfelipe.zihxjrg.mongodb.net/database`, 
    (error) => {
        if (error){
            return console.log('Ocorreu um erro ao conectar com o banco de dados ', error);
        }

        return console.log('Conexão com o banco de dados realizada com sucesso');
    
    });
};

module.exports = connectToDatabase;