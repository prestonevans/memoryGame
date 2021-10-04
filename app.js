document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
        {
            name: 'beach',
            img: 'images/anton-ponomarenko-vXtHl-GP3eg-unsplash.jpg'
        },
        {
            name: 'beach',
            img: 'images/anton-ponomarenko-vXtHl-GP3eg-unsplash.jpg'
        },
        {
            name: 'van',
            img: 'images/daniel-j-schwarz-oX9_ojOC1pc-unsplash.jpg'
        },
        {
            name: 'van',
            img: 'images/daniel-j-schwarz-oX9_ojOC1pc-unsplash.jpg'
        },
        {
            name: 'shoe',
            img: 'images/ervan-m-wirawan-jNrEILtBfbc-unsplash.jpg'
        },
        {
            name: 'shoe',
            img: 'images/ervan-m-wirawan-jNrEILtBfbc-unsplash.jpg'
        },
        {
            name: 'house',
            img: 'images/kristaps-ungurs-W_qtHnG4BX8-unsplash.jpg'
        },
        {
            name: 'house',
            img: 'images/kristaps-ungurs-W_qtHnG4BX8-unsplash.jpg'
        },
        {
            name: 'lake',
            img: 'images/marek-piwnicki-0_nRf7BlhZU-unsplash.jpg'
        },
        {
            name: 'lake',
            img: 'images/marek-piwnicki-0_nRf7BlhZU-unsplash.jpg'
        },
        {
            name: 'mountain',
            img: 'images/nolan-di-meo-jobjGyTc494-unsplash.jpg'
        },
        {
            name: 'mountain',
            img: 'images/nolan-di-meo-jobjGyTc494-unsplash.jpg'
        },
    ];

    cardArray.sort(() => 0.5 - Math.random())

    //game board
    const grid = document.querySelector('.grid');
    let cardsChosen = [];
    let cardsChosenId = [];
    const cardsWon = [];
    const resultDisplay = document.querySelector('#result')
    resultDisplay.textContent = 0;
    const missesDisplay = document.querySelector('.misses');
    let misses = 0;
    missesDisplay.textContent = misses;
    
    function createBoard() {
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/annie-spratt-xz485Eku8O4-unsplash.jpg') 
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.append(card);
        }
    }
    createBoard();

    //check for match
    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/alice-butenko-zstWUZFj77w-unsplash.jpg')
            cards[optionTwoId].setAttribute('src', 'images/alice-butenko-zstWUZFj77w-unsplash.jpg')
            cards[optionOneId].removeEventListener('click', flipcard)
            cards[optionTwoId].removeEventListener('click', flipcard)
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/annie-spratt-xz485Eku8O4-unsplash.jpg')
            cards[optionTwoId].setAttribute('src', 'images/annie-spratt-xz485Eku8O4-unsplash.jpg')
            misses += 1;
            missesDisplay.textContent = misses;
            alert('Sorry, try again')
        } 
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardArray.length/2) {
            document.querySelector('h3').innerHTML = ' Congrats! You found them all!'
        }
    }
    //flip card 
    function flipcard() {
        let Id = this.getAttribute('data-id');
        cardsChosen.push(cardArray[Id].name);
        cardsChosenId.push(Id);
        this.setAttribute('src', cardArray[Id].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }
});
