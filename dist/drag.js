"use strict";
class DraggableBox {
    constructor(box) {
        this.isDragging = false;
        this.offsetX = 0;
        this.offsetY = 0;
        this.box = box;
        this.box.addEventListener("mousedown", this.startDragging.bind(this));
    }
    startDragging(event) {
        this.isDragging = true;
        this.offsetX = event.clientX - this.box.offsetLeft;
        this.offsetY = event.clientY - this.box.offsetTop;
        document.addEventListener("mousemove", this.moveElement.bind(this));
        document.addEventListener("mouseup", this.stopDragging.bind(this));
    }
    moveElement(event) {
        if (this.isDragging) {
            const x = event.clientX - this.offsetX;
            const y = event.clientY - this.offsetY;
            this.box.style.position = "absolute";
            this.box.style.left = `${x}px`;
            this.box.style.top = `${y}px`;
        }
    }
    stopDragging(event) {
        this.isDragging = false;
        document.removeEventListener("mousemove", this.moveElement.bind(this));
        document.removeEventListener("mouseup", this.stopDragging.bind(this));
    }
}
document.querySelectorAll(".box").forEach((element) => {
    const draggableBox = new DraggableBox(element);
});
