import { Router } from 'express';

export abstract class ExpressRouter {
  router: Router;
  constructor() {
    this.router = Router();
  }

  get getRouter() {
    return this.router;
  }

  path(p: string): string {
    return "/" + p
  }
  routesHandler() {}
}
