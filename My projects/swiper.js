document.addEventListener("DOMContentLoaded", function () {
  const testimonials = document.querySelectorAll(".testimonial");
  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
      testimonials.forEach((testimonial, i) => {
          if (i === index) {
              testimonial.style.display = "block";
          } else {
              testimonial.style.display = "none";
          }
      });
  }

  function nextTestimonial() {
      currentTestimonialIndex++;
      if (currentTestimonialIndex >= testimonials.length) {
          currentTestimonialIndex = 0;
      }
      showTestimonial(currentTestimonialIndex);
  }

  function prevTestimonial() {
      currentTestimonialIndex--;
      if (currentTestimonialIndex < 0) {
          currentTestimonialIndex = testimonials.length - 1;
      }
      showTestimonial(currentTestimonialIndex);
  }

  // Initial display
  showTestimonial(currentTestimonialIndex);

  // Auto-advance testimonial every 5 seconds (adjust as needed)
  setInterval(nextTestimonial, 5000);

  // Event listeners for slider navigation
  document.getElementById("next-slide").addEventListener("click", nextTestimonial);
  document.getElementById("prev-slide").addEventListener("click", prevTestimonial);
});
