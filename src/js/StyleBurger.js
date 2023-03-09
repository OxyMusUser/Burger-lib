export function styleBurger(burger, options) {
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

export function styleTranstion(options) {
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
