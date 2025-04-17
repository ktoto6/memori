let LEVEL = 3
let finish = false
if (LEVEL == 1){
  let ezGame = document.querySelector('.ezGame')

  for (let i = 0; i < 12; i += 1) {
    let cell = document.createElement('div')
  cell.style.background = 'url(img/unnamed.png)'
    cell.classList.add('GameCard')
    cell.classList.add('ez')
    cell.setAttribute('id', `${i}`)
    ezGame.appendChild(cell)
  }
}
if (LEVEL == 2){
  let normalGame = document.querySelector('.normalGame')

  for (let i = 0; i < 24; i += 1) {
    let cell = document.createElement('div')
  cell.style.background = 'url(img/unnamed.png)'
    cell.classList.add('GameCard')
    cell.classList.add('normal')
    cell.setAttribute('id', `${i}`)
    normalGame.appendChild(cell)
  }
}
if (LEVEL == 3){
  let hardGame = document.querySelector('.hardGame')

  for (let i = 0; i < 36; i += 1) {
    let cell = document.createElement('div')
    cell.style.background = 'url(img/unnamed.png)'
    cell.classList.add('GameCard')
    cell.classList.add('hard')
    cell.setAttribute('id', `${i}`)
    hardGame.appendChild(cell)
  }
}

let cards = []

let cells = document.querySelectorAll('.GameCard')

let donecards = 0

cells.forEach(cell => {
  i = 0
  cell.addEventListener('click', function(){
    if (cell.classList.contains('Done') == false){
      if (i < 2){
        cell.style.background = 'url(img/unnamed2.png)'
        cards.push(cell)
        i += 1
      } else{
        cell.style.background = 'url(img/unnamed2.png)'
        i = 1
        let card1_back = window.getComputedStyle(cards[0]).getPropertyValue("background");
        // console.log(card1_back)
        let card2_back = window.getComputedStyle(cards[0]).getPropertyValue("background")
        // console.log(card2_back)

        if (card1_back == card2_back){
          cards.forEach(card => {
            card.style.background = '#ADBDFF'
            card.classList.add('Done')
            donecards += 2
            if (donecards == 36 && LEVEL == 3){
              finish = !finish
              console.log(finish)
            }
          })
        }else{
          cards.forEach(card => {
            card.style.background = 'url(img/unnamed.png)'
          })}
        cards = []
        cards.push(cell)
      }
    }
  })
})

// if (donecards == 24 && LEVEL == 2){
//   finish = !finish
// }
// if (donecards == 12 && LEVEL == 1){
//   finish = !finish
// }
