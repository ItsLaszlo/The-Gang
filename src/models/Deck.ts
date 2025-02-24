import { Suit, Rank } from './Card'
import { PokerCard } from './PokerCard'

// enum DeckType { 'poker' }

export class Deck {
  private deck: PokerCard[];


  constructor() {
    this.deck = this.generateDeck();
    this.shuffle()
  };

  private generateDeck(): PokerCard[] {
    const suits: Suit[] = ["Hearts", "Diamonds", "Clubs", "Spades"];
    const ranks: Rank[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const deck: PokerCard[] = ranks.flatMap((rank) => suits.map((suit) => new PokerCard(rank, suit)));
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

  dealCard(cardsToDeal: number = 1): PokerCard[] {
    let dealtCards: PokerCard[] = []

    for (let cardsLeftToDeal = cardsToDeal; cardsLeftToDeal > 0 && this.deck.length > 0; cardsLeftToDeal--) {
      dealtCards.push(this.deck.pop()!);
    }

    return dealtCards;
  };

  getDeck(): PokerCard[] {
    return this.deck;
  }
  getDeckSize(): number {
    return this.deck.length;
  }
}