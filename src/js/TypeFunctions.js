import { TypeBurgerError } from "./ErrorClasses.js";

function isType(type, variable) {
  return typeof variable === type;
}

function returnTypeBurgerError() {
  throw new TypeBurgerError("you passed the wrong type");
}

export default function checkValue(type, value) {
  return isType(type, value) ? value : returnTypeBurgerError();
}
