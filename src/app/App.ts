import AppError from '@common/errors/AppError';
import express, { Application, NextFunction, Request, Response } from 'express';

import ErrorHandler from './middlewares/ErrorHandler';
import router from './router';

class App {
  app: Application;

  constructor() {
    this.app = express();

    this.middlewares().routes().errors();
  }

  middlewares() {
    this.app.use(express.json());

    return this;
  }

  routes() {
    this.app.use('/api/v1', router);

    this.app.all('*', (req: Request, _res: Response, next: NextFunction) => {
      next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
    });

    return this;
  }

  errors() {
    this.app.use(ErrorHandler.execute.bind(ErrorHandler));
  }
}

export default new App().app;
