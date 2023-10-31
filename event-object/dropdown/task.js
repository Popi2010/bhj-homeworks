let dropdown = document.querySelector(".dropdown");


let dropdownItemFunc = (event) => {
  let currentTarget = event.currentTarget
  let text = currentTarget.textContent;
  let dropdownValue = document.querySelector(".dropdown__value");
  dropdownValue.textContent = text;
  event.preventDefault();
}

let dropdownFunc = (event) => {
  let dropdownList = event.currentTarget.lastElementChild;
  let dropdownItems = dropdownList.querySelectorAll(".dropdown__item");
  dropdownItems.forEach(
    element => element.addEventListener("click", dropdownItemFunc)
  )
  dropdownList.classList.toggle("dropdown__list_active");
}


if (dropdown) {
  dropdown.addEventListener("click", dropdownFunc);
}