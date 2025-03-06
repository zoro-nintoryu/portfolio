const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bx-x");
  navlist.classList.remove("open");
};

var btn = document.querySelector('.btn')

btn.onclick = () => {
  alert('waalaikumsalam');
}

var submit = document.querySelector('.submit')

submit.onclick = () => {
  alert('maaf server belum selesai🙏');
}

// Fade-in effect pada elemen
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show"); // Menghapus class saat elemen keluar viewport
      }
    });
  },
  { threshold: 0.2 },
); // Elemen mulai terlihat saat 20% bagian atasnya masuk viewport

fadeElements.forEach((element) => {
  observer.observe(element);
});
