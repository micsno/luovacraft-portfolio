document.addEventListener("DOMContentLoaded", function () {
    const filterBtns = document.querySelectorAll(".filter-btn");
    const galleryImages = document.querySelectorAll(".gallery .image");
  
    // Initially hide all images
    galleryImages.forEach(image => {
      image.style.display = "none";
    });
  
    filterBtns.forEach(btn => {
      btn.addEventListener("click", function () {
        const filterValue = this.getAttribute("data-filter");
        galleryImages.forEach(image => {
          if (filterValue === "all" || image.classList.contains(filterValue)) {
            image.style.display = "block";
          } else {
            image.style.display = "none";
          }
        });
      });
    });
  });
  