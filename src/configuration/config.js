import mongoose from "mongoose";

export class Config {
    constructor() {
        this.dbname = 'krititwaDB';
        this.dbUrl = `mongodb://127.0.0.1:27017/${this.dbName}`
    }


    connectMongoDb() {
        mongoose.connect(this.dbUrl).then(() => {
            console.log('Database connection has been established successfully.');

        }).catch(err => console.log(console.error('Unable to connect to the database:', err)))
    }
}
