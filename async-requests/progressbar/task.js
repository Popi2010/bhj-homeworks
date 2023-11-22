const cardForm = document.getElementById("form");
const progress = document.getElementById("progress");


cardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(cardForm);
  const xhr = new XMLHttpRequest();
  xhr.upload.onprogress = (event) => {
    progress.value = parseFloat(event.loaded / event.total).toFixed(1);
  };
  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.send(formData);
});