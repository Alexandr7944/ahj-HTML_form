/**
 * @jest-environment jsdom
 */

import Tooltip from "../component/tooltip/Tooltip";

test("class Tooltip.addTooltip", () => {
  document.body.innerHTML = `<button class="btn" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`;
  const btn = document.querySelector(".btn");
  const tooltip = new Tooltip(btn);

  btn.onclick = () => {
    let result = tooltip.addTooltip();
    expect(result.classList.contains("tooltip")).toEqual(true);
  };
  btn.click();
});

test("class Tooltip.removeTooltip", () => {
  document.body.innerHTML = `<button class="btn" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>`;
  const btn = document.querySelector(".btn");
  const tooltip = new Tooltip(btn);

  btn.onclick = () => {
    tooltip.addTooltip();
    tooltip.removeTooltip();
  };

  btn.click();
  expect(document.querySelector(".tooltip")).toBe(null);
});
