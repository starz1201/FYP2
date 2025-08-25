// renewable.js

document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const factCards = document.querySelectorAll(".fact-card");

  categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
      // Remove "active" class from all buttons
      categoryButtons.forEach(btn => btn.classList.remove("active"));

      // Add "active" to the clicked button
      button.classList.add("active");

      const category = button.getAttribute("data-category");

      factCards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});