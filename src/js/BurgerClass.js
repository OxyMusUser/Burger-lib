import checkValue from "./TypeFunctions.js";
import { styleBurger } from "./StyleBurger.js";
import { styleTranstion } from "./StyleBurger.js";
import { TypeBurgerError } from "./ErrorClasses.js";

class Burger {
  constructor (selector, {
    lines = 3,
    width = 30,
    height = 25,
    body = true,
    spanHeight = 4,
    spanWidth = 30,
    background = "#000000",
    borderReadius = 3
  } = {}) {
    this._burger = document.querySelector(selector);

    if (lines > 3) throw new TypeBurgerError("more than 3 burger strips");
    if (!background.startsWith("#") || background.length > 8 || background.length < 3) throw new TypeBurgerError("enter the 16th code");

    this._options = {
      width: checkValue("number", width),
      height: checkValue("number", height),
      lines: checkValue("number", lines),
      body: checkValue("boolean", body),
      spanHeight: checkValue("number", spanHeight),
      spanWidth: checkValue("number", spanWidth),
      background: checkValue("string", background),
      borderRadius: checkValue("number", borderReadius)
    }

    this._click();
    this._createLines();

    this._options.spans = this._burger.querySelectorAll(".burger__line");

    styleBurger(this._burger, this._options);
  }

  _createLines() {
    for (let i = 0; i < this._options.lines; i++) {
      const span = document.createElement("span");
      span.classList.add("burger__line");
      this._burger.append(span);
    }
  }

  _click() {
    this._burger.addEventListener("click", () => {
      this._burger.classList.toggle("burger--active");

      if (this._burger.classList.contains("burger--active")) {
        styleTranstion(this._options);
      } else {
        styleBurger(this._burger, this._options);
      }

      if (this._options.body === true) {
        document.body.classList.toggle("lock");
      }
    });
  }
}

new Burger(".burger");
