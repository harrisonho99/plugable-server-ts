import { createServer } from 'http';
import express, { Express, RequestHandler } from 'express';
import Log from '../../tools/log';
import { MongoClient } from 'mongodb';
import { TestRoute } from './routers/routes/TestRoute.class';
import { notFound } from './middlewares/errors/notFound';
import{} from "dgram"

export class Server {
  private app: Express;
  private confMiddleware: Function[] = [];
  private port: number;
  private mongodb: MongoClient;
  private paths: { [key: string]: string };
  constructor(mongodb: MongoClient, port: number = 3100) {
    this.app = express();
    this.port = port;
    this.mongodb = mongodb;
    this.paths = { api: '/api', auth: '/auth', notFound: '*' };
  }

  listen(cb?: Function) {
    this.loadMiddlewares();

    createServer(this.app).listen(this.port, () => {
      cb ? cb() : undefined;
      Log.blueBright('Server listening on port: ', this.port);
    });
  }

  loadMiddlewares() {
    this.initConfigMiddleware();
    this.initRouterMiddleware();
    this.notFoundMiddleware();
  }

  initConfigMiddleware() {
    this.confMiddleware.forEach((mdw) => {
      this.app.use(mdw as RequestHandler);
    });
  }

  initRouterMiddleware() {
    const testR = new TestRoute();

    this.app.use(this.paths.api, testR.getRouter);
  }

  notFoundMiddleware() {
    this.app.use(this.paths.notFound, notFound);
  }
}
