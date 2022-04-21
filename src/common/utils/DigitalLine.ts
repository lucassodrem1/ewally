interface IFields {
  field1: string;
  field2: string;
  field3: string;
}

class DigitalLine {
  getFields(line: string) {
    const field1 = line.slice(0, 10);
    const field2 = line.slice(10, 21);
    const field3 = line.slice(21, 32);
    const field4 = line.slice(32, 33);
    const field5 = line.slice(33);

    return { field1, field2, field3, field4, field5 };
  }

  validVerifyingDigit(fields: IFields) {
    const isValidVerifyingDigit = Object.values(fields).map((field: string) => {
      const total = field
        .slice(0, -1)
        .split('')
        .reverse()
        .map((number, index) => {
          const multiplyNumber = index % 2 === 0 ? 2 : 1;

          const result = Number(number) * multiplyNumber;
          if (result <= 9) return result;

          return Math.floor(result / 10) + Math.floor(result % 10);
        })
        .reduce((a, b) => a + b, 0);

      const totalModule = total % 10;

      const verifyingDigit = Math.ceil(totalModule / 10) * 10 - totalModule;

      if (verifyingDigit !== Number(field[field.length - 1])) return false;

      return true;
    });

    return !isValidVerifyingDigit.some(digit => !digit);
  }
}

export default new DigitalLine();
