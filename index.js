
let LEVEL = 1
// 1-EASY, 2-NORMAL, 3- HARD
let TOPIC = 1
// темы: 1 - дота; 2 - к-поп; 3- фигуры.
let easy = document.querySelector('.easy')
let normal = document.querySelector('.normal')
let hard = document.querySelector('.hard')
let dota = document.querySelector('.dota')
let kpop = document.querySelector('.kpop')
let figurs = document.querySelector('.figurs')
easy.addEventListener('click', function(e){
    e.preventDefault()
    LEVEL = 1
})

normal.addEventListener('click', function(e){
    e.preventDefault()
    LEVEL = 2
})

hard.addEventListener('click', function(e){
    e.preventDefault()
    LEVEL = 3
})

dota.addEventListener('click', function(e){
    e.preventDefault()
    TOPIC = 1
})

kpop.addEventListener('click', function(e){
    e.preventDefault()
    TOPIC = 2
})

figurs.addEventListener('click', function(e){
    e.preventDefault()
    TOPIC = 3
})

let dota_pic_lict = [
    'img/dota/dota1.webp',
    'img/dota/dota2.jpg',
    'img/dota/dota3.jpg',
    'img/dota/dota4.jpg',
    'img/dota/dota5.jpg',
    'img/dota/dota6.png',
    'img/dota/dota7.jpg',
    'img/dota/dota8.jpg',
    'img/dota/dota9.webp',
    'img/dota/dota10.png',
    'img/dota/dota11.jpg',
    'img/dota/dota12.jpg',
    'img/dota/dota13.png',
    'img/dota/dota14.webp',
    'img/dota/dota15.webp',
    'img/dota/dota16.jpg',
    'img/dota/dota17.jpg',
    'img/dota/dota18.jpg'
]
let figur_pic_lict = [
    'img/figur/1fqw.png',
    'img/figur/2fqw.png',
    'img/figur/3fqw.png',
    'img/figur/4fqw.png',
    'img/figur/5fqw.png',
    'img/figur/6fqw.png',
    'img/figur/7fqw.png',
    'img/figur/8fqw.png',
    'img/figur/9fqw.png',
    'img/figur/10fqw.png',
    'img/figur/11fqw.png',
    'img/figur/12fqw.png',
    'img/figur/13fqw.png',
    'img/figur/14fqw.png',
    'img/figur/15fqw.png',
    'img/figur/16fqw.png',
    'img/figur/17fqw.png',
    'img/figur/18fqw.png'

]

let kpop_pic_lict = [
    'img/kpop/kpop1.webp', 
    'img/kpop/kpop2.webp',
    'img/kpop/kpop3.jpg',
    'img/kpop/kpop4.jpg',
    'img/kpop/kpop5.jpg',
    'img/kpop/kpop6.webp',
    'img/kpop/kpop7.jpg',
    'img/kpop/kpop8.webp',
    'img/kpop/kpop9.jpg',
    'img/kpop/kpop10.webp',
    'img/kpop/kpop11.webp',
    'img/kpop/kpop12.webp',
    'img/kpop/kpop13.jpg',
    'img/kpop/kpop14.jpg',
    'img/kpop/kpop15.webp',
    'img/kpop/kpop16.webp',
    'img/kpop/kpop17.png',
    'img/kpop/kpop18.jpg'
]


