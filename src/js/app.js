import Tooltip from "./component/tooltip/Tooltip";

const btn = document.querySelector(".btn");
const tooltip = new Tooltip(btn);

btn.onclick = () => {
  tooltip.addTooltip();

  document.addEventListener("click", (e) => {
    if (e.target === btn) return;
    tooltip.removeTooltip();
  });

  window.addEventListener("resize", tooltip.removeTooltip, true);
};
