import chief from "./assets/imgs/master-chief.jpg";
export default function Load(){
    const content = document.getElementById('content');

    createNav();

    const main = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const img = document.createElement('img');
    const para = document.createElement('p');
    const btn = document.createElement('button');

    content.appendChild(main);
    main.setAttribute('id','main');
    main.appendChild(h1);
    main.appendChild(h2);
    main.appendChild(img);
    main.appendChild(para);
    main.appendChild(btn);

    h1.setAttribute('id','title');
    img.setAttribute('id', 'chief');
    img.src = chief;
    btn.setAttribute('id', 'book_btn')
    para.setAttribute('id', 'quote')

    h1.innerText = "Hot Frying Pan";
    h2.innerText = "Our Chef:";
    para.innerHTML = `<em>"A recipe has no soul, if its not done with love and passion" - <br> Chief</em>`;
    btn.innerText = "Book a Table";
}
function createNav(){
    const content = document.getElementById('content');

    const nav = document.createElement('div');
    const nav_home = document.createElement('div');
    const nav_menu = document.createElement('div');
    const nav_about = document.createElement('div');

    content.appendChild(nav);
    nav.appendChild(nav_home);
    nav.appendChild(nav_menu);
    nav.appendChild(nav_about);

    nav_home.innerText = "Home";
    nav_menu.innerText = "Menu";
    nav_about.innerText =  "About"

    nav.setAttribute('id','nav');
    nav_home.setAttribute("id", "home_tab");
    nav_menu.setAttribute("id", "menu_tab");
    nav_about.setAttribute('id','about_tab');
}