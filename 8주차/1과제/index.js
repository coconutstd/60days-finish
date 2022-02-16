(() => {
  const get = (element) => document.querySelector(element);
  class Runner {
    constructor() {
      this.element = get(".runner-icon");
      this.position = 0;
      this.initEventListener();
    }

    initEventListener() {
      window.addEventListener("keydown", (e) => {
        if (e.key == "ArrowLeft") {
          this.position -= 1;
          this.element.style.transform = `translateX(${this.position}px)`;
        } else if (e.key == "ArrowRight") {
          this.position += 1;
          this.element.style.transform = `translateX(${this.position}px)`;
        }
      });
    }
  }

  new Runner();
})();
