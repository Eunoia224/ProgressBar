// get all the elements needed
const progress = document.getElementById('progress');
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// marking the first circle 
let currentActive = 1;

// adding the event listener to the next btn
next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) { //so our button couldn't try increment more than the available circles
        currentActive = circles.length;
    }
    update();
})

prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) { //so our button couldn't try to decrement below the available circles
    currentActive = 1;
    }
    update();
});
// update the UI 
function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) { 
            circle.classList.add('active') 

        } else {
            circle.classList.remove('active');
        }
    })
    const actives = document.querySelectorAll('.active')
        progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'
        
    if (currentActive === 1) {
        prev.disabled = true
    }
    else if (currentActive === circles.length) {
        next.disabled = true
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}