import { Player } from './Player'

export class PlayerBase {
  private idCounter: number;
  public listOfPlayers: Player[];

  constructor(numberOfPlayers: number) {
    this.idCounter = 0
    this.listOfPlayers = this.addPlayers(numberOfPlayers)
    // board
  }

  addPlayers(numberOfPlayers: number): Player[] {
    let listOfPlayers = []
    for (let i = 0; i < numberOfPlayers; i++) {
      let currentPlayer = new Player(`Player ${i}`)
      currentPlayer.setPlayerID(this.generatePlayerId())
      listOfPlayers.push(currentPlayer)
    }
    return listOfPlayers
  }

  generatePlayerId(): number {
    return this.idCounter++;
  }

  removePlayer() { }

  getAllPlayer(): Player[] {
    return this.listOfPlayers
  }



}