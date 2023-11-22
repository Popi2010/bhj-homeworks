const pollTitle = document.getElementById("poll__title");
const pollAnswers = document.getElementById("poll__answers");

const xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.send();
xhr.addEventListener("load", () => {
  const question = xhr.response;
  const questionData = question.data;
  console.log(xhr);
  pollTitle.innerText = questionData.title;
  questionData.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.classList.add("poll__answer");
    button.innerText = answer;
    pollAnswers.appendChild(button);
    
    button.addEventListener("click", () => {
      const xhrButton = new XMLHttpRequest();
      xhrButton.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
      xhrButton.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhrButton.responseType = "json";
      xhrButton.send(`vote=${question.id}&answer=${index}`);
      
      alert("Спасибо, ваш голос засчитан!");

      xhrButton.addEventListener("load", () => {
        pollAnswers.innerHTML = "";
        pollAnswers.style.flexDirection = "column";
        const stats = xhrButton.response.stat;
        const allVotes = stats.reduce((preSum, stat) => stat.votes + preSum, 0)
        console.log(allVotes);
        stats.forEach(stat => {
          const div = document.createElement("div");
          div.textContent = `${stat.answer}: ${parseFloat(100 / allVotes * stat.votes).toFixed(2)} %`;
          pollAnswers.appendChild(div);
        });
      });
    })

  });
});