const root = document.documentElement;
const toggle = document.getElementById("theme-toggle");

const applyTheme = (theme) => {
  root.setAttribute("data-theme", theme);
  if (toggle) {
    toggle.checked = theme === "light";
  }
};

const savedTheme = localStorage.getItem("site-theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme("dark");
}

if (toggle) {
  toggle.addEventListener("change", () => {
    const nextTheme = toggle.checked ? "light" : "dark";
    localStorage.setItem("site-theme", nextTheme);
    applyTheme(nextTheme);
  });
}
