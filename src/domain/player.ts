export class Player {

  public id:     number;
  public name:   string;
  public number: string; /* allow for "00" too */

  public constructor(id: number, name: string, number: string) {
    this.id     = id;
    this.name   = name;
    this.number = number;
  }

}
