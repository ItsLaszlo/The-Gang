import { Card } from './Card'

export class Board {
  private communityBoard: Card[];
  private discardPile: Card[];

  constructor() {
    this.communityBoard = [];
    this.discardPile = [];
  }

  clearBoard(): void {
    this.communityBoard.length = 0;
    this.discardPile.length = 0;
  }

  discardCard(cards: Card[]): void {
    this.discardPile.push(...cards)
  };

  addCardToCommunityBoard(cards: Card[]): void {
    const availableSlots: number = 5 - this.communityBoard.length;
    if (cards.length > availableSlots) {
      throw new Error(
        `Cannot add more that ${availableSlots} cards`
      );
    }
    this.communityBoard.push(...cards);
  }

  getCommunityBoard(): Card[] {
    return this.communityBoard
  }
  getDiscardPile(): Card[] {
    return this.discardPile
  }



}