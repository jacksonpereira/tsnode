import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

import routes from "./routes";

class App {
  public express: express.Application

  // Constructor
  public constructor() {
    this.express = express()

    this.middlewares()
    this.database()
    this.routes()
  }

  // Middlewares
  private middlewares(): void {
    this.express.use(express.json())
    this.express.use(cors())
  }

  // Databases
  private database(): void {
    mongoose.connect('mongodb://localhost:27017/tsnode', {
      useNewUrlParser: true
    })
  }

  // Routes
  private routes(): void {
    this.express.use(routes)
  }
}

export default new App().express
