const form = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");
const input = form.querySelector("#task__input");


form.addEventListener("submit", event => {
    event.preventDefault();
    let inputValue = input.value.trim();
    if (inputValue) {
        let task = document.createElement("div");
        let taskTitle = document.createElement("div");
        let a = document.createElement("a");
        taskTitle.className = "task__title";
        taskTitle.innerText = inputValue;
        a.className = "task__remove";
        a.href = "#";
        a.innerHTML = "&times;"
        a.addEventListener("click", event => {
            task.remove();
        });
        task.className = "task";
        task.insertAdjacentElement("beforeend", taskTitle);
        task.insertAdjacentElement("beforeend", a);
        tasksList.append(task);
        form.reset();
    }    
});