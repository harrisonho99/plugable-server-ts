import { RequestHandler } from 'express';

const notFound: RequestHandler = (_, res) =>
  res
    .json({
      message: 'Not found!',
    })
    .status(404);

export { notFound };
