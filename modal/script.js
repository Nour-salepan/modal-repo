const modalBtn = document.getElementById("modal-btn");
const closeBtn = document.querySelector(".btn-close");
const modal = document.getElementById("modal");

console.log(closeBtn);

modalBtn.addEventListener("click", (e) => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", (e) => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
