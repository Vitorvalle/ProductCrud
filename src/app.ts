import exp from "constants";
import routes from "./routes";
import express from "express";
import mongoose from "mongoose";
import { deflate } from "zlib";

class App {
    public express: express.Application

    public constructor(){
        this.express = express()
        this.middleware()
        this.routes()
        this.database()
    }

    public middleware(): void{
        this.express.use(express.json())
    }

    public async database(){
        try {
            mongoose.set('strictQuery', true)
            await mongoose.connect('mongodb://0.0.0.0:27017')
            console.log("Connection Successful")
        } catch (error) {
            console.error("Connection Failed", error)
        }
    }

    public routes(): void {
        this.express.use(routes)
    }
}
export default new App().express