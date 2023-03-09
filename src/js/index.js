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

function styleBurger(burger, options) {
  burger.style.cursor = "pointer";
  burger.style.position = "relative";
  burger.style.zIndex = 999;
  burger.style.width = `${options.width}px`;
  burger.style.height = `${options.height}px`;
  options.spans.forEach((item) => {
    item.style.position = "absolute";
    item.style.left = 0;
    item.style.borderRadius = `${options.borderRadius}px`;
    item.style.transform = "translate(-2px, -50%)";
    item.style.height = `${options.spanHeight}px`;
    item.style.width = `${options.spanWidth}px`;
    item.style.backgroundColor = options.background;
    item.style.transition = "top 0.3s ease-in-out, transform 0.3s ease-in-out, bottom 0.3s ease-in-out, rotate 0.3s ease-in-out";
  })
  options.spans[0].style.top = 0;
  options.spans[options.spans.length - 1].style.top = `100%`;

  if (options.spans.length === 3) {
    options.spans[1].style.top = `50%`;
    options.spans[1].style.opacity = 1;
    options.spans[1].style.transform = "translate(-2px, -50%)";
  }
}

function styleTranstion(options) {
  options.spans[0].style.top = `50%`;
  options.spans[0].style.transform = "rotate(45deg)";
  options.spans[0].style.left = 0;

  options.spans[options.spans.length - 1].style.top = `50%`;
  options.spans[options.spans.length - 1].style.transform = "rotate(-45deg)";
  options.spans[options.spans.length - 1].style.left = 0;

  if (options.spans.length === 3) {
    options.spans[1].style.opacity = 0;
  }
}

function isType(type, variable) {
  return typeof variable === type;
}

function returnTypeBurgerError() {
  throw new TypeBurgerError("you passed the wrong type");
}

function checkValue(type, value) {
  return isType(type, value) ? value : returnTypeBurgerError();
}

class TypeBurgerError extends Error {
  constructor (message) {
    super(message);
    this.name = "BurgerError";
  }
}
