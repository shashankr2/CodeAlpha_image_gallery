// Get the modal and its elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("caption");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Get all images in the gallery
const images = document.querySelectorAll(".gallery-item");
let currentIndex = 0; // Store the current index of the opened image

// Open modal with the clicked image
function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImg.src = images[currentIndex].src;
  captionText.innerHTML = images[currentIndex].alt;
}

// Loop through all images to add click event
images.forEach((img, index) => {
  img.addEventListener("click", function () {
    openModal(index);
  });
});

// Close modal when 'x' is clicked
const close = document.querySelector(".close");
close.addEventListener("click", function () {
  modal.style.display = "none";
});

// Show previous image
prevBtn.addEventListener("click", function () {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  openModal(currentIndex);
});

// Show next image
nextBtn.addEventListener("click", function () {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  openModal(currentIndex);
});

// Close modal on 'Escape' key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modal.style.display = "none";
  } else if (e.key === "ArrowRight") {
    nextBtn.click();
  } else if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
