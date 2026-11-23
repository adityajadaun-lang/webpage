
const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

// Mobile navigation
menuButton.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");

  menuButton.setAttribute(
    "aria-expanded",
    String(opened)
  );
});

// Navigation links
document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );

    document.querySelectorAll(".nav-links a")
      .forEach(item => item.classList.remove("active"));

    link.classList.add("active");
  });

});

// Dark and light mode
document.querySelector(".theme-toggle")
  .addEventListener("click", () => {

    document.body.classList.toggle("light");

  });

// Scroll reveal animation
const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("visible");

      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});

// Apply animation to sections
document.querySelectorAll(".reveal")
  .forEach(section => observer.observe(section));
