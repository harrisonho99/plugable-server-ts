import { Request, Response, NextFunction } from 'express';

import { IncomingMessage, ServerResponse } from 'http';

type Middleware = (req: Request, res: Response, next?: NextFunction) => any;

type ConfMiddleware = (req: IncomingMessage, res: ServerResponse) => any;

type AnyMiddleware = (...args: any[]) => any;

export { Middleware, ConfMiddleware, AnyMiddleware };
