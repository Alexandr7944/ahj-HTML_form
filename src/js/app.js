import Tooltip from "./component/tooltip/Tooltip";

const btn = document.querySelector(".btn");
const tooltip = new Tooltip(btn);

btn.onclick = () => {
  document.querySelector(".tooltip")
    ? tooltip.removeTooltip()
    : tooltip.addTooltip();
};
