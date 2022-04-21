class GenenateExpirationDateService {
  execute(digitalLine: string) {
    const days = Number(digitalLine.slice(33, 37));

    const date = new Date(1997, 10 - 1, 7);
    date.setDate(date.getDate() + days);

    return date.toISOString().split('T')[0];
  }
}

export default new GenenateExpirationDateService();
