let corm = [{
    title: "Сказочное заморское яство",
    subTitle: 'Чего сидишь? Порадуй котэ, <a href="#"> купи</a><span>.</span>'},
    {
    title: 'Котэ не одобряет?',
    subTitle: 'Печень утки разварная с артишоками.'},
    {
    title: 'Котэ не одобряет?',
    subTitle: 'Головы щучьи с чесноком да свежайшая сёмгушка.'},
    {
    title: 'Котэ не одобряет?',
    subTitle: 'Филе из цыплят с трюфелями в бульоне.'},
];







/* let circleSecond = document.querySelector('.circle-second');
let circleFirst = document.querySelector('.circle-first');
let circleThird = document.querySelector('.circle-third'); */

let selectBg = document.getElementsByClassName('cat-items__item');
let bOne = document.getElementById('b-one');

//Cards
/* ------------------------------------------------------------------------------------- */
let testOne = document.getElementById('test-one'); //First card
let testTwo = document.getElementById('test-two'); // Second card
let testThree = document.getElementById('test-three'); //Third card
let catCard = document.querySelector('.cat-items__item');
/* ------------------------------------------------------------------------------------- */

let buy = document.querySelector('.buy');
let titleSpan = document.querySelectorAll('.title-span');


/* catCard.addEventListener('mouseover', changeTitle);

catCard.addEventListener('mouseout', returnTitle);


function changeTitle(e) {
    if(e.target.classList.contains('select')){
        titleSpan.style.color = 'red';
        titleSpan.innerHTML = 'Котэ не одобряет?'; 
    }
}

function returnTitle(e) {
    titleSpan.style.color = '#666666';
    titleSpan.innerHTML = 'Сказочное заморское яство';
} */

let cardArray = [];
let titleSpans = [];

for(let i = 0; i < catCard.length; i++) {
    catCard[i].addEventListener('click', select)
}


for (let i = 0; i < selectBg.length; i++) {
        selectBg[i].addEventListener('click', select, func);

        cardArray.push(selectBg[i]);
    }
console.log(cardArray)

for (let i = 0; i < titleSpan.length; i++) {
    
    titleSpans.push(titleSpan[i]);
}
console.log(titleSpans)

if(e.target === cardArray[1]) {
    titleSpan[1].innerHTML = 'Котэ не одобряет?';
}

function func(e) {
    if(e.target.cardArray === cardArray[1]) {
        titleSpan[1].innerHTML = 'Котэ не одобряет?';
    }
}



function select(e) {
    if(e.target.classList.contains('select')) {
        e.target.classList.remove('select');
        bOne.innerHTML = 'Чего сидишь? Порадуй котэ, <a href="#"> купи</a><span>.</span>';
        titleSpan.style.color = '#666666';
        titleSpan.innerHTML = 'Сказочное заморское яство';
    } else {
        e.target.classList.add('select');
        bOne.innerHTML = 'Печень утки разварная с артишоками.';
        titleSpan.style.color = 'red';
        titleSpan.innerHTML = 'Котэ не одобряет?'; 
    }
}
