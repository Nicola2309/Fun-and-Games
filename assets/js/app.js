document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
        name: 'clown',
        img: 'assets/imgs/clown-miniature.png'
        },
                {
        name: 'Desert',
        img: 'assets/imgs/desert-sky.png'
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

const grid = document.querySelector('.grid')
var cardsChosen = []
var cardsChosenId = []

    // creating your board
    //con il 'for loop' loopperemo nel nostro (Array/)vettore di carte e daremo un'immagine ad ogni carta
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'assets/imgs/cardBack.png')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    // check for matches


    // flip the card
 function flipCard(){
     var cardId = this.getAttribute('data-id')
     cardsChosen.push(cardArray[cardId].name) // con questo comando pushamo le carte del cardArray, in base al loro cardId(cioe' la loro posizione nell'Array, da 0 a .length) nel cardsChosen array, e otterremo il loro nome indietro.
     cardsChosenId.push(cardId)
     this.setAttribute('src', cardArray[cardId].img)
     if (cardsChosen.length === 2) {
         setTimeout(checkForMatch, 500)
     }
 }
    
    createBoard();

});