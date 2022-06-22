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

console.log(corm[1].subTitle);



let circleSecond = document.querySelector('.circle-second');
let circleFirst = document.querySelector('.circle-first');
let circleThird = document.querySelector('.circle-third');
let selectBg = document.getElementsByClassName('cat-items__item');
let bOne = document.getElementById('b-one');

//Cards
/* ------------------------------------------------------------------------------------- */
let testOne = document.getElementById('test-one'); //First card
let testTwo = document.getElementById('test-two'); // Second card
let testThree = document.getElementById('test-three'); //Third card
/* ------------------------------------------------------------------------------------- */



let buy = document.querySelector('.buy');
let titleSpan = document.getElementById('title-span');



for (let i = 0; i < selectBg.length; i++) {
        selectBg[i].addEventListener('click', select);
    }




function select(e) {
    if(e.target.classList.contains('select')) {

        if(e.target.classList.contains('one')){
            console.log("its first card");
        }
        if(e.target.classList.contains('two')){
            console.log("its second card");
        }
        if(e.target.classList.contains('three')){
            console.log("its third card");
        }





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
