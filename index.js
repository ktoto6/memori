function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function getRandomElements(arr, count) {
  const shuffled = arr.slice().sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function getTheme_pics(){
  if (TOPIC == 1) {
    return dota_pic_lict
  } else if (TOPIC == 2) {
    return kpop_pic_lict
  } else {
    return figur_pic_lict
  }
}


// Перемешиваем массив с парами
function shuffleArray(array) {
  for (let i = array.length -1; i >0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
let LEVEL = 1
// 1-EASY, 2-NORMAL, 3- HARD
let TOPIC = 1
let play_btn = document.querySelector('.play')
play_btn.addEventListener('click', change_level)

let level = document.querySelector('.level')
let theme = document.querySelector('.theme')
let kran = document.querySelector('.kran')
let Game = document.querySelector('.Game')
let main = document.querySelector('.main')

function change_level() {
  // console.log('nn')
  main.style.display = "none"
  level.style.display = "flex"

  let easy = document.querySelector('.easy_l')
  let normal = document.querySelector('.normal_l')
  let hard = document.querySelector('.hard_l')
  easy.addEventListener('click', function (e) {
    e.preventDefault()
    LEVEL = 1
    // console.log(LEVEL)
    game()
  })

  normal.addEventListener('click', function (e) {
    e.preventDefault()
    LEVEL = 2
    game()
  })

  hard.addEventListener('click', function (e) {
    e.preventDefault()
    LEVEL = 3
    game()
  })
}

function change_topic() {

  console.log('bbb')
  // темы: 1 - дота; 2 - к-поп; 3- фигуры.
  main.style.display = "none"
  theme.style.display = "flex"

  let dota = document.querySelector('.dota')
  let kpop = document.querySelector('.kpop')
  let figurs = document.querySelector('.figurs')

  dota.addEventListener('click', function (e) {
    e.preventDefault()
    TOPIC = 1
    main.style.display = "flex"
    theme.style.display = "none"
    // window.location.href = ""
  })

  kpop.addEventListener('click', function (e) {
    e.preventDefault()
    TOPIC = 2
    // window.location.href = ""
    main.style.display = "flex"
    theme.style.display = "none"
  })

  figurs.addEventListener('click', function (e) {
    e.preventDefault()
    TOPIC = 3
    // window.location.href = ""
    main.style.display = "flex"
    theme.style.display = "none"
  })
}

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
let cardImages = [];
let donecards = 0
function game() {
  


  level.style.display = "none"
  Game.style.display = "block"
  let finish = false
  if (LEVEL == 1) {
    let ezGame = document.querySelector('.ezGame')
    const selectedImages = getRandomElements(getTheme_pics(),6);
    ezGame.style.display = 'grid'
// Создаём пары для каждой картинки
    cardImages = [];
    selectedImages.forEach(img => {
      cardImages.push(img);
      cardImages.push(img);
    });
    shuffleArray(cardImages);

    for (let i = 0; i < 12; i += 1) {
      let cell = document.createElement('div')
      cell.style.background = 'url(img/unnamed.png)'
      cell.style.backgroundSize = 'contain'

      cell.classList.add('GameCard')
      cell.classList.add('ez')
      cell.setAttribute('id', `${i}`)
      ezGame.appendChild(cell)
    }
  }
  if (LEVEL == 2) {
    let normalGame = document.querySelector('.normalGame')
    normalGame.style.display = 'grid'
    const selectedImages = getRandomElements(getTheme_pics(),12);

    // Создаём пары для каждой картинки
    cardImages = [];
    selectedImages.forEach(img => {
      cardImages.push(img);
      cardImages.push(img);
    });
    shuffleArray(cardImages);
    for (let i = 0; i < 24; i += 1) {
      let cell = document.createElement('div')
      cell.style.background = 'url(img/unnamed.png)'
      cell.style.backgroundSize = 'contain'

      cell.classList.add('GameCard')
      cell.classList.add('normal')
      cell.setAttribute('id', `${i}`)
      normalGame.appendChild(cell)
    }
  }
  if (LEVEL == 3) {
    let hardGame = document.querySelector('.hardGame')
    hardGame.style.display = 'grid'
    const selectedImages = getRandomElements(getTheme_pics(),18);

    // Создаём пары для каждой картинки
    cardImages = [];
    selectedImages.forEach(img => {
      cardImages.push(img);
      cardImages.push(img);
    });
    shuffleArray(cardImages);
    for (let i = 0; i < 36; i += 1) {
      let cell = document.createElement('div')
      cell.style.background = 'url(img/unnamed.png)'
      cell.style.backgroundSize = 'contain'

      cell.classList.add('GameCard')
      cell.classList.add('hard')
      cell.setAttribute('id', `${i}`)
      hardGame.appendChild(cell)
    }
  }

  let cards = []

  let cells = document.querySelectorAll('.GameCard')

  donecards = 0

  cells.forEach(cell => {
    // i = 0
    cell.addEventListener('click', function () {
      console.log(donecards)
      if (cell.classList.contains('Done') == false) {
        if (cards.length < 2) {
          // cell.style.background = window.getComputedStyle(cell.getPropertyValue("background"));
          cell.style.backgroundImage = `url(${cardImages[+cell.getAttribute('id')]})`
          cell.style.backgroundSize = 'contain'
          cell.style.backgroundRepeat = 'no-repeat'
          cards.push(cell)
          // i += 1
        } else {
          // cell.style.background = window.getComputedStyle(cell.getPropertyValue("background"));
          // cell.style.background = `url(${cardImages[i]})`
          cell.style.backgroundImage = `url(${cardImages[+cell.getAttribute('id')]})`
          cell.style.backgroundSize = 'contain'
          cell.style.backgroundRepeat = 'no-repeat'
          
          // i = 1
          
          let card1_back = window.getComputedStyle(cards[0]).getPropertyValue("background-image");
          // console.log(card1_back)
          let card2_back = window.getComputedStyle(cards[1]).getPropertyValue("background-image")
          // console.log(card2_back)

          if (card1_back == card2_back) {
            console.log(card1_back, card2_back)
            cards.forEach(card => {
              card.style.background = '#ADBDFF'
              card.classList.add('Done')
              donecards += 1
              if ((document.querySelectorAll('.Done').length == 24 || donecards == 24) && LEVEL == 2) {
                // finish = !finish
                Game.style.display = "none"
                kran.style.display = "flex"
              }
              if ((document.querySelectorAll('.Done').length == 12 || donecards == 12) && LEVEL == 1) {
                // finish = !finish
                    Game.style.display = "none"
                kran.style.display = "flex"
              }
              if ((document.querySelectorAll('.Done').length == 36 || donecards == 36) && LEVEL == 3) {
                // finish = !finish
                    Game.style.display = "none"
                kran.style.display = "flex"
              }
            })
          } else {
            cards.forEach(card => {
              card.style.background = 'url(img/unnamed.png)'
          card.style.backgroundSize = 'contain'

            })
          }
          cards = []
          cards.push(cell)
        }
      }
    })
  })
  if (donecards == 24 && LEVEL == 2) {
    // finish = !finish
    Game.style.display = "none"
    kran.style.display = "flex"
  }
  if (donecards == 12 && LEVEL == 1) {
    // finish = !finish
        Game.style.display = "none"
    kran.style.display = "flex"
  }
  if (donecards == 36 && LEVEL == 3) {
    // finish = !finish
        Game.style.display = "none"
    kran.style.display = "flex"
  }
}

document.querySelector('.tem').addEventListener('click', function(e){
  e.preventDefault()
  change_topic()
})

document.querySelector('.in-main').addEventListener('click', function(e){
  e.preventDefault()
  kran.style.display = "none"
    main.style.display = "flex"
})