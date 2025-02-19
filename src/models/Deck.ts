import { Card, Suit, Rank } from './Card'

export class Deck {
  private deck: Card[];


  constructor() {
    this.deck = this.generateDeck();
    this.shuffle()
  };

  private generateDeck(): Card[] {
    const suits: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const deck: Card[] = [];

    for (const suit of suits) {
      for (const rank of ranks) {
        deck.push(new Card(rank, suit));
      }
    }
    return deck;
  };

  resetDeck(): void {
    this.deck = this.generateDeck()
  }

  shuffle(): void {
    //Fisher-Yates Shuffle
    for (let currentIndex = this.deck.length - 1; currentIndex > 0; currentIndex--) {
      const swapIndex = Math.floor(Math.random() * (currentIndex + 1)); //random index generator
      [this.deck[currentIndex], this.deck[swapIndex]] = [this.deck[swapIndex], this.deck[currentIndex]] //swap
    }
  };

  dealCard(cardsToDeal: number = 1): Card[] {
    let dealtCards: Card[] = []

    for (let cardsLeftToDeal = cardsToDeal; cardsLeftToDeal > 0 && this.deck.length > 0; cardsLeftToDeal--) {
      dealtCards.push(this.deck.pop()!);
    }

    return dealtCards;
  };

  getDeck(): Card[] {
    return this.deck;
  }
  getDeckSize(): number {
    return this.deck.length;
  }
}