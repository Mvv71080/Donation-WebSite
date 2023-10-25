var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.addEventListener("DOMContentLoaded", function () {
  const starRating = document.getElementById("star-rating");
  const ratingText = document.getElementById("rating-text");

  // Add event listeners to stars for rating
  starRating.addEventListener("click", (e) => {
      if (e.target.classList.contains("star")) {
          const selectedRating = e.target.getAttribute("data-rating");
          ratingText.innerText = `You rated us ${selectedRating} star(s). Thank you!`;
          
          // Mark the selected stars as active
          const stars = starRating.querySelectorAll(".star");
          stars.forEach((star) => {
              const starRatingValue = star.getAttribute("data-rating");
              star.classList.remove("active");
              if (starRatingValue <= selectedRating) {
                  star.classList.add("active");
              }
          });
      }
  });
});
