import { PokerCard } from './PokerCard'
import { Board, Round } from './Board';

export class Player {
  private playerId: number;
  public nickname: string;
  public hand: PokerCard[];
  public isLeader: boolean;
  private roundNumber: Round;


  constructor(nickname: string) {
    this.nickname = nickname;
    this.playerId = 0
    this.hand = []
    this.isLeader = false
    this.roundNumber = 0
  }


  getPlayerId(): number {
    return this.playerId;
  }

  getPlayerNickname(): string {
    return this.nickname;
  }

  getPlayerHand(): string[] {
    //Todo: Repetitive code maybe have a function to display card names in an array
    const handCardNames = this.hand.map(card => card.name);
    return handCardNames
  }


  discardHand(): PokerCard[] {
    const discard = this.hand
    this.hand = []
    return discard
    // Maybe import Board and add immediately to discard pile
  }

  setLeader(leaderStatus: boolean): void {
    this.isLeader = leaderStatus
  }

  setPlayerID(id: number): void {
    this.playerId = id
  }
  nextRound(): void {
    if (this.roundNumber < 4) {
      this.roundNumber++
    }
  }

  playerRoundStatus(): Round {
    return this.roundNumber;
  }

}