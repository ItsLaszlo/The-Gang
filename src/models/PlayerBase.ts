import { Player } from './Player'

export class PlayerBase {
  private ids: Set<number>;
  private listOfPlayers: Player[];

  constructor() {
    this.ids = new Set()
    this.listOfPlayers = []
  }

  addPlayer(newPlayer: Player): void {
    this.listOfPlayers.push(newPlayer)
  }

  removePlayer(): Player {

  }

  getAllPlayer() { }



}