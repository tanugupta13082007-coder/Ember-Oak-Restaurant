
// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Reveal animation on scroll
const sections = document.querySelectorAll(
    ".about, .menu, .gallery, .reservation"
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    section.classList.add("reveal");
    observer.observe(section);
});
// Menu category filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const menuCards = document.querySelectorAll(".menu-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {

        // Active button update
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.filter;

        // Filter menu cards
        menuCards.forEach(card => {
            if (category === "all" || card.dataset.category === category) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        });
    });
});

console.log("Ember & Oak website loaded successfully!");

// Restaurant Table Booking
const bookingForm = document.getElementById("bookingForm");
// Prevent booking for past dates
const dateInput = document.getElementById("bookingDate");
dateInput.min = new Date().toISOString().split("T")[0];

bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("customerName").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const guests = document.getElementById("guests").value;

    const message = `Hello Ember & Oak!%0A
Name: ${name}%0A
Date: ${date}%0A
Time: ${time}%0A
Guests: ${guests}%0A
I would like to reserve a table.`;

    const phone = "919876543210";

    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});
