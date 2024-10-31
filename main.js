let burger = document.querySelector('.header__burger');
let newLists = document.querySelector('.header__lists');
let burgerImg = document.querySelector('.button__active')

let open = () => {
    if(burger.classList.toggle('open')) {
        burgerImg.src = "img/close.png"
        newLists.style.transform = 'translateY(0)';
    } else {
        burgerImg.src = "img/burger.svg";
        newLists.style.transform = 'translateY(-500%)';
    }
 
    
}



burger.addEventListener('click', open)

