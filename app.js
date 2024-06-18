const p1Img =document.getElementById('p1Img')
const p2Img = document.getElementById('p2Img')
const mesagesElement = document.getElementById('message')
let mesages = ''


function getRandomDiceNumber() {
    const randomDiceNumber = Math.floor(Math.random() * 6 + 1)
    return randomDiceNumber
}


function clickHandler() {
    console.log(p1Img.src)
    const player1 = getRandomDiceNumber()
    const player2 = getRandomDiceNumber()

    p1Img.src = p1Img.src.split('dice')[0] + 'dice' + player1 + '.png'
     p2Img.src = p2Img.src.split('dice')[0] + 'dice' + player2 + '.png'

    
    if (player1 > player2) {
        mesages = "Player 1 wins!"
    }
    if (player1 < player2) {
         mesages = "Player 2 wins!"
    }
    if (player1 == player2) {
        mesages = "Draw!!"
    }

    mesagesElement.innerText= mesages
    mesagesElement.style.display = 'block'
}