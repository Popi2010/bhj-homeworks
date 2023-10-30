const timerFunc = function() {
    const timer = document.getElementById('timer');
    timer.textContent --;
    if (timer.textContent <= 0) {
      alert("Вы победили в конкурсе!");
      clearInterval(intervalId);
    }
    }
  
  const intervalId = setInterval(timerFunc, 1000);