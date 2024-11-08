"use strict";
const boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
    if (box) {
        let isDragging = false;
        let offsetX, offsetY;
        function startDragging(event) {
            isDragging = true;
            offsetX = event.clientX - box.offsetLeft;
            offsetY = event.clientY - box.offsetTop;
            // Add event listeners for moving and stopping drag
            document.addEventListener("mousemove", moveElement);
            document.addEventListener("mouseup", stopDragging);
        }
        function moveElement(event) {
            if (isDragging) {
                const x = event.clientX - offsetX;
                const y = event.clientY - offsetY;
                box.style.position = "absolute"; // Ensure the box can be moved
                box.style.left = `${x}px`;
                box.style.top = `${y}px`;
            }
        }
        function stopDragging() {
            isDragging = false;
            document.removeEventListener("mousemove", moveElement);
            document.removeEventListener("mouseup", stopDragging);
        }
        box.addEventListener("mousedown", startDragging);
    }
    else {
        console.error("Element with id 'box' not found!");
    }
});
// const moveRightButton = document.getElementById(
//   "moveRight"
// ) as HTMLButtonElement;
// const moveLeftButton = document.getElementById("moveLeft") as HTMLButtonElement;
// const moveBoxUpButton = document.getElementById("moveUp") as HTMLButtonElement;
// const moveBoxDownButton = document.getElementById(
//   "moveDown"
// ) as HTMLButtonElement;
// function moveBoxToRight() {
//   let position = parseInt(window.getComputedStyle(box).left);
//   position += 10; // Move 10px to the right
//   box.style.left = `${position}px`;
// }
// function moveBoxToLeft() {
//   let position = parseInt(window.getComputedStyle(box).left);
//   position -= 10; // Move 10px to the left
//   box.style.left = `${position}px`;
// }
// function moveBoxToUp() {
//   let position = parseInt(window.getComputedStyle(box).top);
//   position -= 10;
//   box.style.top = `${position}px`;
// }
// function moveBoxToDown() {
//   let position = parseInt(window.getComputedStyle(box).top);
//   position += 10;
//   box.style.top = `${position}px`;
// }
// // Add event listeners to buttons
// moveRightButton.addEventListener("click", moveBoxToRight);
// moveLeftButton.addEventListener("click", moveBoxToLeft);
// moveBoxUpButton.addEventListener("click", moveBoxToUp);
// moveBoxDownButton.addEventListener("click", moveBoxToDown);
