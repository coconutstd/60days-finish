(() => {
  ("use strict");

  const get = (element) => document.querySelector(element);
  class Painter {
    constructor() {
      this.mouseDown = false;
      this.canvas = get(".canvas");
      this.ctx = this.canvas.getContext("2d");
      this.pen = get(".js-penSize");
      this.colorPick = get(".js-colorPicker");
      this.erager = get(".js-erager");
      this.reset = get(".js-clear");
      this.size = this.pen.value;
      this.color = this.colorPick.value;

      this.events();
    }

    events() {
      this.colorPick.addEventListener(
        "change",
        (e) => (this.color = e.target.value)
      );

      this.pen.addEventListener("change", (e) => {
        this.setPen(e.target.value);
      });

      this.erager.addEventListener("click", () => this.setErager());

      this.reset.addEventListener("click", () => this.setReset());

      this.canvas.addEventListener("mousedown", (event) => {
        this.mouseDownHandler(this.canvas, event);
      });

      this.canvas.addEventListener("mousemove", (event) => {
        this.mouseMoveHandler(this.canvas, event);
      });

      this.canvas.addEventListener("mouseup", () => {
        this.mouseUpHandler();
      });
    }

    getMouse($canvas, event) {
      const paint = $canvas.getBoundingClientRect();
      return {
        x: event.clientX - paint.left,
        y: event.clientY - paint.top
      };
    }

    // 1번 문제
    setPen(size) {}

    // 2번 문제
    mouseDownHandler($canvas, event) {
      this.mouseDown = true;
      const currentPosition = this.getMouse($canvas, event);
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.size;
      // 작성하세요
    }

    // 3번 문제
    mouseMoveHandler($canvas, event) {
      if (!this.mouseDown) return;
      const currentPosition = this.getMouse($canvas, event);
      // 작성하세요.

      // 끝
      this.ctx.stroke();
    }

    // 4번 문제
    mouseUpHandler() {}

    // 5번 문제
    setErager() {}

    // 6번 문제
    setReset() {
      this.ctx.fillStyle = "#fff";
      this.setPen(7);
      this.color = "#000";
      // 작성하세요
    }
  }

  new Painter();
})();
