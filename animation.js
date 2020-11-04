const messages = document.querySelectorAll(".phone__message");

messages.forEach((message) =>
  window.addEventListener("load", () => {
    message.classList.add("non-visible");
  })
);

messages.forEach((message, index) =>
  window.addEventListener("load", () => {
    setTimeout(() => {
      message.classList.add("slide-top");
      message.classList.remove("non-visible");
    }, index * 1000);
  })
);
