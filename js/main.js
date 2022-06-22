let catCard = document.querySelectorAll('.cat-items__item');
let titleSpan = document.querySelectorAll('.title-span');
let buy = document.querySelectorAll('.buy');



for(let i = 0; i < catCard.length; i++) {
    catCard[i].addEventListener('click', select)
}

/* catCard.addEventListener('mouseout', changeTitle); */

function select(e) {
    if(e.currentTarget.classList.contains('select')){
        e.currentTarget.classList.remove('select');
        selectBuy()
    } else {
        e.currentTarget.classList.add('select'); 
    }
}

function show(event) {
    console.log(event.type);
    console.log(event.target);
}

