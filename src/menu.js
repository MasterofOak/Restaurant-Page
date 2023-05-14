export default function menuTab(){
    const content = document.getElementById('content');
    content.children[1].remove();
    
    const menu = document.createElement('div');
    content.appendChild(menu);
    menu.setAttribute('id','menu');

    const header1 = document.createElement('h2');
    const header2 = document.createElement('h2');
    const header3 = document.createElement('h2');
    const first_course = document.createElement('ul');
    const second_course = document.createElement('ul');
    const drinks= document.createElement('ul');

    menu.appendChild(header1);
    menu.appendChild(first_course);
    menu.appendChild(header2);
    menu.appendChild(second_course);
    menu.appendChild(header3);
    menu.appendChild(drinks);

    header1.innerText = 'First Course';
    header2.innerText = 'Second Course';
    header3.innerText = 'Drinks';
    
    createUnorderedList(first_course);
    createUnorderedList(second_course);
    createUnorderedList(drinks);

    const dishes = ['Borscht','Chicken Soup','French Onion Soup','Friend Chicken','Pork','Fruit Salad','Wine','Shampagne','Green Tea'];
    const lists = document.querySelectorAll('li');
    for(let i = 0; i < dishes.length; i++){
        lists[i].innerHTML = `<em>${dishes[i]}</em>`;
    }

}
function createUnorderedList(parent){
    for(let i = 0; i<3; i++){
        const li = document.createElement('li');
        parent.appendChild(li);
    }
}