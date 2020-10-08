document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
        name: 'Penguin',
        img : 'assets/imgs/judo_penguin.png'
        },
        {
        name: 'Troll',
        img : 'assets/imgs/Troll01.png'
        },
        {
        name: 'clown',
        img: 'assets/imgs/clown-miniature.png'
        },
                {
        name: 'Desert',
        img: 'assets/imgs/desert -sky.png'
        },
                {
        name: 'Gaugin',
        img: 'assets/imgs/gauguin-da-dove-veniamo2.png'
        },
                {
        name: 'Cheetah',
        img: 'assets/imgs/google.png'
        },
                {
        name: 'River',
        img: 'assets/imgs/IMG.png'
        },
                {
        name: 'Jezus',
        img: 'assets/imgs/Jee-Rex.png'
        },
                {
        name: 'Elephants',
        img: 'assets/imgs/kaan.png'
        },
                {
        name: 'Moon',
        img: 'assets/imgs/pic-night-ice.png'
        },
                {
        name: 'Island',
        img: 'assets/imgs/shotgun.png'
        },
                {
        name: 'Tango Dragons',
        img: 'assets/imgs/tangomarziale.png'
        }
        
    ]

cardArray.sort(() => 0.5 - Math.random()) // quando ricominciamo il gioco mischia il mazzo di carte randomizzandolo.

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#results')
var cardsChosen = []
var cardsChosenId = []
const cardsWon  = []

    // creating your game board
    //con il 'for loop' loopperemo nel nostro (Array/)vettore di carte e daremo un'immagine ad ogni carta
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/imgs/cardBack.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    // check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src','assets/imgs/cardBack.png')
            cards[optionTwoId].setAttribute('src','assets/imgs/cardBack.png')
            alert('You have clicked the same image!')
        }
       else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'assets/imgs/robin-schreiner-7y4858E8PfA-unsplash.png')
            cards[optionTwoId].setAttribute('src', 'assets/imgs/robin-schreiner-7y4858E8PfA-unsplash.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'assets/imgs/cardBack.png')
            cards[optionTwoId].setAttribute('src', 'assets/imgs/cardBack.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    // flip the card
 function flipCard() {
     var cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name) // con questo comando pushamo le carte del cardArray, in base al loro cardId(cioe' la loro posizione nell'Array, da 0 a .length) nel cardsChosen array, e otterremo il loro nome indietro.
     cardsChosenId.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2) {
         setTimeout(checkForMatch, 500)
     }
 }
    
    createBoard()

})