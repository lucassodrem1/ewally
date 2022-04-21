class AppError extends Error {
  message!: string;

  statusCode: number;

  status: 'fail' | 'error';

  isOperational: boolean;

  constructor(message = '', statusCode = 400) {
    super(message);

    this.statusCode = statusCode;
    this.status = String(statusCode).startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
  }
}

export default AppError;
