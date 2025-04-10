document.querySelectorAll("nav a[href^='#']").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".card").forEach((card) => {
  observer.observe(card);
});

const ctaBtn = document.querySelector(".cta button");
ctaBtn.addEventListener("click", function (e) {
  const circle = document.createElement("span");
  const diameter = Math.max(this.clientWidth, this.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - this.offsetLeft - radius}px`;
  circle.style.top = `${e.clientY - this.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = this.querySelector(".ripple");
  if (ripple) ripple.remove();

  this.appendChild(circle);
});
