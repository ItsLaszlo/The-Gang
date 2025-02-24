import { PokerCard } from './PokerCard'
import { Deck } from './Deck'
import { Player } from './Player';
import { PlayerBase } from './PlayerBase';

export type Round = 0 | 1 | 2 | 3 | 4

export class Board {
  private communityBoard: PokerCard[];
  private discardPile: PokerCard[];
  private deckInUse: Deck;
  private playerBase: PlayerBase;

  constructor(deckInUse: Deck, playerBase: PlayerBase) {
    this.deckInUse = deckInUse;
    this.communityBoard = [];
    this.discardPile = [];
    this.playerBase = playerBase;
  }

  clearBoard(): void {
    this.communityBoard = [];
    this.discardPile = [];
  }

  burnCard(): void {
    this.discardPile.push(...this.deckInUse.dealCard())
  };

  discardCard(cards: PokerCard[]): void {
    this.discardPile.push(...cards)
  };

  availableCommunitySlots(): number {
    return 5 - this.communityBoard.length
  }

  dealRoundOneCards(): string[] | void {
    // NOt sure of return type just yet bc return is in IF block
    if (this.availableCommunitySlots() == 5) {
      this.burnCard()
      const dealtCards = this.deckInUse.dealCard(3)
      this.communityBoard.push(...dealtCards)
    }
    return this.getCommunityBoardCardNames()
  }

  dealRoundTwoOrThreeCards(): string[] | void {
    if (this.availableCommunitySlots() < 5) {
      this.burnCard()
      const dealtCard = this.deckInUse.dealCard()
      this.communityBoard.push(...dealtCard)
    }
    return this.getCommunityBoardCardNames()
  }

  dealHandToPlayers(): void {
    // Todo: Need condition to check hand size of player
    this.playerBase.listOfPlayers.forEach(player => {
      if (player.hand.length == 2) {
        console.log('Hand is at max size, 2. Discard entire hand first.');
      } else {
        player.hand.push(...this.deckInUse.dealCard(2))
      }
    })
  }

  getCommunityBoardCardNames(): string[] | void {
    if (this.availableCommunitySlots() < 5) {
      const communityBoardCardNames = this.communityBoard.map(card => card.name)
      return communityBoardCardNames
    } else {
      console.log('Community Board is empty')
    }
  }
  getCommunityBoardCards(): PokerCard[] {
    return this.communityBoard
  }
  getDiscardPile(): PokerCard[] {
    return this.discardPile
  }



}