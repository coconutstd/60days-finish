const container = document.querySelector(".toast-container");
const button = document.querySelector(".toast-button");

let index = 1;

button.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.classList.add("toast", "show");
  toast.innerText = `${index}번 토스트입니다`;
  index += 1;
  setTimeout(removeToast, 3000);

  function removeToast() {
    container.removeChild(container.lastElementChild);
  }
  container.prepend(toast);
});
