class DraggableBox {
  private box: HTMLElement;
  private isDragging: boolean = false;
  private offsetX: number = 0;
  private offsetY: number = 0;

  constructor(box: HTMLElement) {
    this.box = box;
    this.box.addEventListener("mousedown", this.startDragging.bind(this));
  }

  private startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - this.box.offsetLeft;
    this.offsetY = event.clientY - this.box.offsetTop;

    document.addEventListener("mousemove", this.moveElement.bind(this));
    document.addEventListener("mouseup", this.stopDragging.bind(this));
  }

  private moveElement(event: MouseEvent) {
    if (this.isDragging) {
      const x = event.clientX - this.offsetX;
      const y = event.clientY - this.offsetY;

      this.box.style.position = "absolute";
      this.box.style.left = `${x}px`;
      this.box.style.top = `${y}px`;
    }
  }

  private stopDragging(event: MouseEvent) {
    this.isDragging = false;
    document.removeEventListener("mousemove", this.moveElement.bind(this));
    document.removeEventListener("mouseup", this.stopDragging.bind(this));
  }
}

document.querySelectorAll(".box").forEach((element) => {
  const draggableBox = new DraggableBox(element as HTMLElement);
});
