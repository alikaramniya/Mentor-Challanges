// modules/theme.js

const root = document.querySelector("html");

export const toggleTheme = (event) => {
    if (root.classList.contains("light")) {
        root.classList.replace("light","dark");
        event.target.previousElementSibling.textContent = "Light";
        event.target.src = "./assets/icons/icon-sun.svg";
    } else {
        root.classList.replace("dark","light");
        event.target.previousElementSibling.textContent = "Dark";
        event.target.src = "./assets/icons/icon-moon.svg";
    }
};
