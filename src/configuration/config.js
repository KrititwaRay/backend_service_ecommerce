import mongoose from "mongoose";

export class Config {
    constructor() {
        this.dbname = 'krititwaDB';
        this.dbPass = '';
        this.dbUrl = `mongodb://127.0.0.1:27017/${this.dbName}`
    }


    async connectMongoDb() {
        // mongoose.connect(this.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        //     console.log('Database connection has been established successfully.');

        // }).catch(err => console.log(console.error('Unable to connect to the database:', err)))
        await mongoose.connect(this.dbUrl).then(() => {
            console.log('Database connection has been established successfully.');

        }).catch(err => console.log(console.error('Unable to connect to the database:', err)))
    }
}
