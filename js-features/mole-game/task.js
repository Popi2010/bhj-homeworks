const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

getHole = (index) => document.getElementById(`hole${index}`);


for (let index = 1; index <= 9; index++) {
getHole(index).onclick = function() {
    if (getHole(index).className.includes('hole_has-mole')) {
       dead.textContent++;  
    } else {
       lost.textContent++;
    }


    if (dead.textContent >= 10) {
      alert("Победа!");
      dead.textContent = 0;
      lost.textContent = 0;
    }

    if (lost.textContent == 5) {
      alert("Вы проиграли!");
      dead.textContent = 0;
      lost.textContent = 0;
    }
  }
}