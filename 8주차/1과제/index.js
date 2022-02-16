(() => {
  const get = (element) => document.querySelector(element);
  class Runner {
    constructor() {
      this.element = get(".runner-icon");
      this.position = 0;
      this.velocity = 5;
      this.initEventListener();
    }

    initEventListener() {
      window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowLeft") {
          this.position -= this.velocity;
          this.element.style.transform = `translateX(${this.position}px)`;
        } else if (e.key == "ArrowRight") {
          this.position += this.velocity;
          this.element.style.transform = `translateX(${this.position}px)`;
        }
      });
    }
  }

  new Runner();
})();
