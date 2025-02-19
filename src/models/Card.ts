export type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
export type Rank = 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K';
// export type value = 1 | 2 | 3 |


export class Card {
  rank: Rank;
  suit: Suit;

  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
  };

  getValue(asLowAce = false) {
    //return numeric value
    if (this.rank === "A") return asLowAce ? 1 : 14;
    if (this.rank === "K") return 13;
    if (this.rank === "Q") return 12;
    if (this.rank === "J") return 11;
    return parseInt(this.rank, 10);
  }
}
