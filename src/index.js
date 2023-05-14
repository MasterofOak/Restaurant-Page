import Load from "../src/load";
import homeTab from "../src/home";
import menuTab from "../src/menu";
import aboutTab from "../src/about";
import "../src/style.css"

Load();

document.getElementById('home_tab').addEventListener('click', () => homeTab());
document.getElementById('menu_tab').addEventListener('click', () => menuTab());
document.getElementById('about_tab').addEventListener('click', () => aboutTab());