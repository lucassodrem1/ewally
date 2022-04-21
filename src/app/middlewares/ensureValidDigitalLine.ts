import AppError from '@common/errors/AppError';
import DigitalLine from '@common/utils/DigitalLine';
import { NextFunction, Request, Response } from 'express';

export default function ensureValidDigitalLine(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { digitalLine } = req.params;

  if (Number.isNaN(Number(digitalLine)))
    throw next(new AppError('Only numbers are allowed in the digital line.'));

  const { field1, field2, field3 } = DigitalLine.getFields(digitalLine);

  const hasValidVerifyingDigit = DigitalLine.validVerifyingDigit({
    field1,
    field2,
    field3,
  });

  if (!hasValidVerifyingDigit)
    throw new AppError('Digital line has an invalid verifying digit.');

  next();
}
