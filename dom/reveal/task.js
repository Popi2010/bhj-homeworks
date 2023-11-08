const reveals = document.querySelectorAll(".reveal");
console.log(reveals);

checkVisible = (element) => {
  const viewportHeight = window.innerHeight;
  const { top, bottom } = element.getBoundingClientRect();
  if (top < 0 || bottom > viewportHeight) {
    return false;
  }
  return true;
}

window.addEventListener(
  "scrollend",
  () => {
    reveals.forEach(
      el => {
        const visibleStatus = checkVisible(el);
        if (visibleStatus && !el.classList.contains("reveal_active")) {
          el.classList.add("reveal_active");
        } else if (!visibleStatus && el.classList.contains("reveal_active")) {
          el.classList.remove("reveal_active");
        }
      }
    );
  }
)