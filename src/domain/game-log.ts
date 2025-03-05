import { GameLogEvent } from './game-log-event';
import { Player } from './player';

export class GameLog {

  public id: number;
  public player: Player;
  public event: GameLogEvent;

  public constructor(id: number, player: Player, event: GameLogEvent) {
    this.id     = id;
    this.player = player;
    this.event  = event;
  }

}
