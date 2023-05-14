import chief from "./assets/imgs/master-chief.jpg";
export default function homeTab(){
    const content = document.getElementById('content');
    content.children[1].remove();
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