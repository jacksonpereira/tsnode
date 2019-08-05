import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

class App {
    public express: express.Application

    // Constructor
    public constructor () {
      this.express = express()

      this.middlewares()
      this.database()
      this.routes()
    }

    // Middlewares
    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
    }

    // Databases
    private database (): void {
      mongoose.connect('mongodb://localhost:27017/tsnode', {
        useNewUrlParser: true
      })
    }

    // Routes
    private routes (): void {
      this.express.get('/', (req, res) => {
        return res.send('Hello World')
      })
    }
}

export default new App().express
