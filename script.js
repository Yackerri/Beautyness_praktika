window.addEventListener("scroll", function() {
  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.pageYOffset > 200) {
    scrollToTopBtn.style.display = "block";
    scrollToTopBtn.classList.remove("scroll-to-top-btn-hidden");
    scrollToTopBtn.classList.add("scroll-to-top-btn-visible");
  } else {
    scrollToTopBtn.classList.remove("scroll-to-top-btn-visible");
    scrollToTopBtn.classList.add("scroll-to-top-btn-hidden");
    setTimeout(function() {
      scrollToTopBtn.style.display = "none";
    }, 300);
  }
});




