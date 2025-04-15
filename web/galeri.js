const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("fullImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll('.image img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

closeBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
