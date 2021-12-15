import compression from 'compression';
import morgan from 'morgan';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { ConfMiddleware, Middleware } from './index.type';
import { RequestHandler, urlencoded, json } from 'express';
import cors from 'cors';

const serverLogStream = createWriteStream(join(__dirname, 'server.log'), { flags: 'a' });

const confMiddlewares: ConfMiddleware | Middleware | RequestHandler[] = [
  cors(),

  compression(),

  urlencoded({ extended: true ,}),

  json(),

  morgan('combined', { stream: serverLogStream }),
];

export { confMiddlewares };
