// スマホ表示のときに、メニューを開閉するための処理です
const menuButton = document.querySelector(".menu-button");
const globalNav = document.querySelector(".global-nav");
const navLinks = document.querySelectorAll(".global-nav a");

if (menuButton && globalNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = globalNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", isOpen);
  });
}

// メニュー内のリンクを押したら、自動でメニューを閉じます
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuButton && globalNav) {
      globalNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
});
