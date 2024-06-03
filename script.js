// Contact Form
var modal = document.getElementById("contactFormModal");
var btn = document.getElementById("contactUsButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Form submission handling
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch(this.action, {
      method: "POST",
      body: formData,
    }).then(function (response) {
      if (response.ok) {
        alert("Form submitted successfully!");
        modal.style.display = "none";
      } else {
        alert("Error submitting form.");
      }
    });
  });
// Slider and dot handling
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  let currentIndex = 0;

  function showSlide(index) {
    const slidesContainer = document.querySelector(".slides");
    const totalSlides = slides.length;
    if (index >= totalSlides) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = totalSlides - 1;
    } else {
      currentIndex = index;
    }
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
  }

  function updateDots() {
    dots.forEach((dot, idx) => {
      if (idx === currentIndex) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideIndex = parseInt(e.currentTarget.dataset.slide, 10);
      showSlide(slideIndex);
    });
  });

  showSlide(currentIndex);

  const detailItems = document.querySelectorAll(".detail-item");
  const projectImage = document.getElementById("project-image");

  detailItems.forEach((item) => {
    item.addEventListener("click", () => {
      const newImageSrc = item.getAttribute("data-image");
      projectImage.src = newImageSrc;
      detailItems.forEach((detail) => detail.classList.remove("highlighted"));
      item.classList.add("highlighted");
    });
  });
});
