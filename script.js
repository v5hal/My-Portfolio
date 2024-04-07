function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function() {
  const projectContainers = document.querySelectorAll(".details-container");
  const prevPage = document.getElementById("prevPage");
  const nextPage = document.getElementById("nextPage");

  let currentIndex = 3; // Start index at 3
  const itemsPerPage = 3;

  // Show the first three projects
  showProjects(currentIndex, currentIndex + itemsPerPage);

  function showProjects(startIndex, endIndex) {
    projectContainers.forEach((container, index) => {
      if (index >= startIndex && index < endIndex) {
        container.style.display = "block";
      } else {
        container.style.display = "none";
      }
    });
  }

  nextPage.addEventListener("click", function() {
    currentIndex += itemsPerPage;
    showProjects(currentIndex, currentIndex + itemsPerPage);
    prevPage.style.display = "inline-block";
    if (currentIndex + itemsPerPage >= projectContainers.length) {
      nextPage.style.display = "none";
    }
  });

  prevPage.addEventListener("click", function() {
    if (currentIndex > 3) {
      currentIndex -= itemsPerPage;
      showProjects(currentIndex, currentIndex + itemsPerPage);
      nextPage.style.display = "inline-block";
      if (currentIndex <= 3) {
        prevPage.style.display = "none";
      }
    }
  });
});

