const tooltipsList = [...document.querySelectorAll(".has-tooltip")];
const tooltip = document.querySelector(".tooltip");


tooltipsList.forEach(
  element => {
    element.addEventListener(
      "click",
      event => {
        event.preventDefault();
        let { bottom, left } = element.getBoundingClientRect();
        let message = element.title;
        tooltipMessage = tooltip.innerText;
        if (message === tooltipMessage) {
          tooltip.classList.toggle("tooltip_active");
          return;
        }
        tooltip.innerText = message;
        tooltip.style.top = `${bottom}px`;
        tooltip.style.left = `${left}px`;
        tooltip.classList.add("tooltip_active");
      }
    );
  }
);

window.addEventListener("scroll", () => tooltip.classList.remove("tooltip_active"));