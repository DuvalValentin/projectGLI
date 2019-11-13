export class Sport
{
  id:number;
  name:string;
  idVilles:Array<number>

  constructor(id:number,name:string,idVilles:Array<number>)
  {
    this.id=id;
    this.name=name;
    this.idVilles=idVilles;
  }
}