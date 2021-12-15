import { ExpressRouter } from '../ExpressRouter.class';
import { Router } from 'express';

export class TestRoute extends ExpressRouter {
  constructor() {
    super();
    this.routesHandler();
  }

  routesHandler() {
    this.router.get(this.path('test'), (req, res) => {
      res.json({ message: 'success' });
    });
  }
}
