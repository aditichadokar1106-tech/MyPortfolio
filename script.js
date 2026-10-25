/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


/* Close mobile menu after clicking link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });

});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


/* =========================
   TYPING ANIMATION
========================= */

const typingText = document.getElementById("typingText");

const words = [
    "Full Stack Developer",
    "Web Developer",
    "Computer Science Engineer",
    "Creative Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingText.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


/* =========================
   PROJECT MODAL
========================= */

const modal =
    document.getElementById("projectModal");

const closeModal =
    document.getElementById("closeModal");

const modalTitle =
    document.getElementById("modalTitle");

const modalDescription =
    document.getElementById("modalDescription");

const modalTech =
    document.getElementById("modalTech");


const projectDetails = {

    portfolio: {

        title: "Portfolio Website",

        description:
            "Personal portfolio website to showcase my skills and projects.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    },


    restaurant: {

        title: "Restaurant Management System",

        description:
            "A website for managing restaurant operations.",

        technologies: [
            "Web Development"
        ]

    },


    web: {

        title: "Web Development",

        description:
            "Exploring and developing responsive websites using modern web technologies.",

        technologies: [
            "HTML",
            "CSS",
            "JavaScript"
        ]

    }

};


document.querySelectorAll(".details-btn")
    .forEach(button => {

        button.addEventListener("click", () => {

            const project =
                button.getAttribute("data-project");

            const data =
                projectDetails[project];

            modalTitle.textContent = data.title;

            modalDescription.textContent =
                data.description;

            modalTech.innerHTML = "";

            data.technologies.forEach(tech => {

                const span =
                    document.createElement("span");

                span.textContent = tech;

                modalTech.appendChild(span);

            });

            modal.classList.add("show");

        });

    });


/* Close modal */

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});


/* Close modal by clicking outside */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("show");
    }

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please fill all the fields.";

        return;
    }


    if (!email.includes("@")) {

        formMessage.textContent =
            "Please enter a valid email.";

        return;
    }


    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    contactForm.reset();

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
    document.getElementById("backToTop");


window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});