// ── TYPEWRITER ──────────────────────────────────────────────────
console.log("SCRIPT LOADED");

const roles = [
  "Cybersecurity Analyst",
  "SOC Analyst",
  "Penetration Tester"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById("typewriter");

function typeWriter() {
  const currentWord = roles[wordIndex];

  if (!isDeleting && charIndex < currentWord.length) {
    typeEl.textContent += currentWord.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 85);
  } else if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => { isDeleting = true; typeWriter(); }, 1800);
  } else if (isDeleting && charIndex > 0) {
    typeEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    setTimeout(typeWriter, 42);
  } else {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % roles.length;
    setTimeout(typeWriter, 300);
  }
}

typeWriter();

// ── SKILL BAR ANIMATION ─────────────────────────────────────────
const skillsSection = document.getElementById("skills");
const fills = document.querySelectorAll(".fill");
let animated = false;

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !animated) {
      animated = true;
      fills.forEach(fill => {
        fill.style.width = fill.getAttribute("data-w") + "%";
      });
    }
  });
}, { threshold: 0.2 });

skillObserver.observe(skillsSection);

// ── ACTIVE NAV HIGHLIGHT ────────────────────────────────────────
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = "";
        link.style.background = "";
      });
      const active = document.querySelector(
        `.nav-links a[href="#${entry.target.id}"]`
      );
      if (active) {
        active.style.color = "#22D3EE";
        active.style.background = "rgba(34, 211, 238, 0.1)";
      }
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });

sections.forEach(sec => navObserver.observe(sec));

// PARTICLES

const particleBg = document.getElementById("particle-bg");

console.log("particleBg =", particleBg);

for(let i=0;i<20;i++){

    const particle = document.createElement("div");

    particle.classList.add("particle");

    if(Math.random() > 0.5){
        particle.classList.add("purple");
    }

    particle.style.left = Math.random()*100 + "%";
    particle.style.top = Math.random()*100 + "%";

    particle.style.animationDuration =
        (15 + Math.random()*20) + "s";

    particle.style.animationDelay =
        (Math.random()*10) + "s";

    particleBg.appendChild(particle);
}