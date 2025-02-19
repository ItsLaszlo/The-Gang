import { Deck } from './models/Deck';
import { Board } from './models/Board';

// Create Deck
let currentDeck = new Deck();
currentDeck.shuffle();
// console.log('shuffled', currentDeck.getDeck());
currentDeck.shuffle();
// console.log('shuffledx2', currentDeck.getDeck());

// Deal hands
let hand = currentDeck.dealCard(2);
console.log('hand dealt', hand);

// Create Board
const currentBoard = new Board();
console.log('current board\n discard pile:', currentBoard.getDiscardPile())
console.log('community Board:', currentBoard.getCommunityBoard())

// Round 1
let burnCard = currentDeck.dealCard();
console.log(`Does ${burnCard[0]} exist in current deck `, burnCard.every(card => currentDeck.getDeck().includes(card)))
currentBoard.discardCard(burnCard)
let dealtCards = currentDeck.dealCard(3)
currentBoard.addCardToCommunityBoard(dealtCards)

console.log('current board\n discard pile:', currentBoard.getDiscardPile())
console.log('community Board:', currentBoard.getCommunityBoard())

// discard hand
// currentBoard.discardCard(hand)
// hand = currentDeck.dealCard(2)
// console.log('current board\n discard pile:', currentBoard.getDiscardPile())

// round 2
burnCard = currentDeck.dealCard();
dealtCards = currentDeck.dealCard()
currentBoard.discardCard(burnCard)
currentBoard.addCardToCommunityBoard(dealtCards)

// round 3
burnCard = currentDeck.dealCard();
dealtCards = currentDeck.dealCard()
currentBoard.discardCard(burnCard)
currentBoard.addCardToCommunityBoard(dealtCards)

console.log('current board round 3\n discard pile:', currentBoard.getDiscardPile())
console.log('community Board:', currentBoard.getCommunityBoard())

currentBoard.clearBoard()
console.log('current board NEW BOARD\n discard pile:', currentBoard.getDiscardPile())
console.log('community Board:', currentBoard.getCommunityBoard())
console.log(`current deck size ${currentDeck.getDeck().length}`, currentDeck.getDeck());

currentDeck.resetDeck()

console.log(`NEW deck size ${currentDeck.getDeck().length}`, currentDeck.getDeck());


