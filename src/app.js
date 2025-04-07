import "./styles.scss";
//hero
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".header__link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});

//header
// Scroll suave
document.querySelectorAll(".header__link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Sticky con transparencia
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (window.scrollY > 20) {
    header.classList.add("header--transparent");
  } else {
    header.classList.remove("header--transparent");
  }
});

//products
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleProducts");
  const hiddenCards = document.querySelectorAll(".product-card.is-hidden");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      hiddenCards.forEach((card, index) => {
        // Animación con retraso escalonado
        setTimeout(() => {
          card.classList.remove("is-hidden");
          card.classList.add("fade-in"); // Agregamos animación CSS
        }, index * 100); // Escalonar aparición
      });

      toggleBtn.style.display = "none";
    });
  }
});
