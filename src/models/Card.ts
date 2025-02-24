export type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';

export class Card {
  rank: Rank;
  suit: Suit;
  name: string;

  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
    this.name = this.createCardName();
  };

  createCardName(): string {
    return `${this.rank} of ${this.suit}`
  }
}