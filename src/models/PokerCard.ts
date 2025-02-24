import { Card } from './Card'

export class PokerCard extends Card {


  getPokerCardValue(asLowAce = false) {
    //return numeric value
    if (this.rank === "A") return asLowAce ? 1 : 14;
    if (this.rank === "K") return 13;
    if (this.rank === "Q") return 12;
    if (this.rank === "J") return 11;
    return parseInt(this.rank, 10);
  }
}
