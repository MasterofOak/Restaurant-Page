export default function aboutTab(){
    const content = document.getElementById('content');
    content.children[1].remove();
    
    const about = document.createElement('div');
    content.appendChild(about);
    about.setAttribute('id','about');

    const para1 = document.createElement('p'); 
    const para2 = document.createElement('p'); 
    const para3 = document.createElement('p'); 

    about.appendChild(para1);
    about.appendChild(para2);
    about.appendChild(para3);

    para1.innerHTML = "<b>Phone Number</b>: 555-444-999.<br> Available from Monday to Friday 10Am - 8PM";
    para2.innerHTML = "<b>E-mail</b>: restaurant.best@gmail.com"
    para3.innerHTML = "<b>Street</b>: Green-Bush 32/5";
}