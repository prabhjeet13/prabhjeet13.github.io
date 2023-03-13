
let menuBt = document.querySelector("#menu-btn");
let closeBt = document.querySelector("#close-btn");

let menu = document.querySelector('nav .container ul');


let a = () => {
    menu.style.display = 'block';
    menuBt.style.display ='none';
    closeBt.style.display = 'inline-block';
}
menuBt.addEventListener('click',a);

let b = () => {
    menu.style.display = 'none';
    menuBt.style.display = 'inline-block';
    closeBt.style.display = 'none';
}
closeBt.addEventListener('click',b);


// show skills

let skillItem = document.querySelectorAll('section.skills .skill');

skillItem.forEach(s => {
    s.querySelector('.head').addEventListener('click',()=> {
        s.querySelector('.items').classList.toggle('show-items');
    })
})
