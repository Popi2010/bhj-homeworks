const loader = document.getElementById("loader");
const items = document.getElementById("items");
const currenciesLocal = localStorage.getItem("currensiesData");
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();
xhr.responseType = "json";


function showCurrensies(parent, currencies) {
  Object.values(currencies).forEach(data => {
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <div class="item__code">
        ${data.CharCode}
      </div>
      <div class="item__value">
        ${data.Value}
      </div>
      <div class="item__currency">
        руб.
      </div>
    `
    parent.appendChild(item);
  });
}


if (currenciesLocal) {
  showCurrensies(items, JSON.parse(currenciesLocal));
}


xhr.addEventListener("load", () => {
  loader.classList.remove("loader_active");
  items.innerHTML = "";
  const currencies = xhr.response.response.Valute;
  showCurrensies(items, currencies);
  localStorage.setItem("currensiesData", JSON.stringify(currencies));
});