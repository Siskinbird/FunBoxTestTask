'use strict'

let catCard = document.querySelectorAll('.cat-items__item');
let buy = document.querySelectorAll('.buy');
let catBlock = document.querySelector('.cat-items')
let titleSpan = document.querySelectorAll('.title-span');

catCard.forEach((item) => {
    item.addEventListener('click', select)
})

function select(e) {
    if(e.currentTarget.classList.contains('select')){
        e.currentTarget.classList.remove('select');
        console.log(e.target)
    } else {
        e.currentTarget.classList.add('select'); 
        console.log(e.target)
    }
}


catCard.forEach((card) => card.addEventListener('mouseenter', (e) => {
    const element = e.target.closest('.cat-items__item');
    const elementIndex = [...catCard].indexOf(element);
    if(element.classList.contains('select')) {
        titleSpan[elementIndex].textContent = 'Котэ не одобряет?';
        titleSpan[elementIndex].style.color =  '#D91667';
    } else {
        titleSpan[elementIndex].textContent = 'Сказочное заморское яство';
        titleSpan[elementIndex].style.color =  '#666666';
    }   
}))

catCard.forEach((card) => card.addEventListener('mouseleave', (e) => {
    const element = e.target.closest('.cat-items__item');
    const elementIndex = [...catCard].indexOf(element);
    titleSpan[elementIndex].textContent = 'Сказочное заморское яство';
    titleSpan[elementIndex].style.color =  '#666666';
}))
