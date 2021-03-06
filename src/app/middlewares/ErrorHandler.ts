import { NextFunction, Request, Response } from 'express';

interface IAppError extends Error {
  statusCode?: number;
  status?: string;
  isOperational?: boolean;
}

class ErrorHandler {
  execute(err: any, _req: Request, res: Response, _next: NextFunction) {
    const error = Object.assign(err) as IAppError;

    error.statusCode = error.statusCode ? error.statusCode : 500;
    error.status = error.status ? error.status : 'error';

    if (process.env.NODE_ENV === 'dev') return this.sendDevError(error, res);

    return this.sendProdError(error, res);
  }

  private sendDevError(err: IAppError, res: Response) {
    res.status(err.statusCode || 500).json({
      status: err.status,
      message: err.message,
      stack: err.stack,
      err,
    });
  }

  private sendProdError(err: IAppError, res: Response) {
    if (err.isOperational) {
      return res.status(err.statusCode || 500).json({
        status: err.status,
        message: err.message,
      });
    }

    return res.status(err.statusCode || 500).json({
      status: err.status,
      message: 'Internal server error.',
    });
  }
}

export default new ErrorHandler();
