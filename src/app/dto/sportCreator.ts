export class SportCreator
{
  id:number;
  name:string;
  idTowns:Array<number>

  constructor(id:number,name:string,idTowns:Array<number>)
  {
    this.id=id;
    this.name=name;
    this.idTowns=idTowns;
  }
}