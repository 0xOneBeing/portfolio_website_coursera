document.addEventListener("DOMContentLoaded", function () {
  const currentYear = document.getElementById("currentYear");
  currentYear.textContent = new Date().getFullYear();

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (event) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });
      this.classList.add("active");
    });
  });

  const sections = document.querySelectorAll("section[id]");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const correspondingNavLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );
        if (correspondingNavLink) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
          });
          correspondingNavLink.classList.add("active");
        }
      }
    });
  }, options);
  sections.forEach((section) => {
    observer.observe(section);
  });
});
