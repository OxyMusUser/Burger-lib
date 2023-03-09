export class TypeBurgerError extends Error {
  constructor (message) {
    super(message);
    this.name = "BurgerError";
  }
}
