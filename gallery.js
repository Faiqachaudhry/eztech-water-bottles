document.addEventListener("DOMContentLoaded", function () {

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
menuToggle.addEventListener("click", function () {
const isOpen = navLinks.classList.toggle("open");

menuToggle.setAttribute("aria-expanded", String(isOpen));
menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after selecting a link
navLinks.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
navLinks.classList.remove("open");
menuToggle.setAttribute("aria-expanded", "false");
menuToggle.textContent = "☰";
});
});
}

// Product category filters
const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(function (button) {
button.addEventListener("click", function () {
const selectedCategory = button.dataset.filter;

filterButtons.forEach(function (item) {
item.classList.remove("active");
});

button.classList.add("active");

productCards.forEach(function (card) {
const category = card.dataset.category;

card.hidden =
selectedCategory !== "all" &&
category !== selectedCategory;
});
});
});

// Automatic copyright year
const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

console.log("Ezitech website JavaScript connected successfully!");

});

