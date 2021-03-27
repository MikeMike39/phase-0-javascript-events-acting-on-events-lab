//Creates the const "Dodger"
const dodger = document.getElementById("dodger");
//Creates a "addEventListen" that responds to users arrow input
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});
//Creates a Function moves cursor to the "Left"
function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}
//Creates a Function moves cursor to the "Right"
function moveDodgerRight() {
  const rightNumbers = dodger.style.left;
  const right = parseInt(rightNumbers, 10);
  if (right > 0) {
    dodger.style.left = `${right + 1}px`;
  }
}
