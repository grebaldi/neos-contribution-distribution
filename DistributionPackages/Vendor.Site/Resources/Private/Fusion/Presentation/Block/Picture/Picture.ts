document.querySelectorAll('[data-component="Picture"]').forEach((el) => {
  el.addEventListener("click", () => {
    alert("This is where a lightbox should appear.");
  });
});
