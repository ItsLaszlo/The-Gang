import { Card } from './Card'

type RoundStatus = {
  Round1: boolean;
  Round2: boolean;
  Round3: boolean;
};

export class Player {
  private playerId: string;
  private nickname: string;
  private hand: Card[];
  private leader: boolean;
  private roundStatus: RoundStatus;

  constructor(nickname: string) {
    this.nickname = nickname;
    this.playerId = ''
    this.hand = []
    this.leader = false
    this.roundStatus = { Round1: false, Round2: false, Round3: false }
  }

  isLeader(): boolean {
    return this.leader
  }

  getPlayerId(): string {
    return this.playerId;
  }

  getPlayerNickname(): string {
    return this.nickname;
  }

  getPlayerHand(): Card[] {
    return this.hand;
  }

  changeNickname(newNickname: string): void {
    this.nickname = newNickname
  }

  addCardToHand(card: Card[]): void {
    if (this.hand.length == 2) {
      throw new Error('Hand is at max size, 2. Discard entire hand first.');
    }
    this.hand.push(...card)
  }

  discardHand(): Card[] {
    const discard = this.hand
    this.hand.length = 0
    return discard
  }

  setLeader(leaderStatus: boolean): void {
    this.leader = leaderStatus
  }

  roundParticipated(round: keyof RoundStatus): void {
    this.roundStatus[round] = true
  }

  playerRoundStatus(round: keyof RoundStatus): boolean {
    return this.roundStatus[round]
  }

}