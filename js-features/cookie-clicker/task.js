const clicker = document.getElementById('cookie')
const count = document.getElementById('clicker__counter')
clicker.onclick = function() {
  let clicks = count.textContent++;
  if (clicks % 2 == 0) {
  clicker.width = 300;
  clicker.height = 214;
  } else {
  clicker.width = 200;
  clicker.height = 127;
  }
  }