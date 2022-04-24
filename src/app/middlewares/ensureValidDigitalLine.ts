import AppError from '@common/errors/AppError';
import catchAsync from '@common/errors/catchAsync';
import DigitalLine from '@common/utils/DigitalLine';
import { NextFunction, Request, Response } from 'express';

class EnsureValidDigitalLine {
  execute = catchAsync(
    async (req: Request, _res: Response, next: NextFunction) => {
      const { digitalLine } = req.params;

      if (Number.isNaN(Number(digitalLine)))
        throw new AppError('Only numbers are allowed on the digital line.');

      if (digitalLine.length !== 47)
        throw new AppError('Invalid digital line.');

      const { field1, field2, field3 } = DigitalLine.getFields(digitalLine);

      const hasValidVerifyingDigit = DigitalLine.validVerifyingDigit({
        field1,
        field2,
        field3,
      });

      if (!hasValidVerifyingDigit)
        throw new AppError('Digital line has an invalid verifying digit.');

      return next();
    },
  );
}

export default new EnsureValidDigitalLine();
