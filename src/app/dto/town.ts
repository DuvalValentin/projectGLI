export class Town
{
    name: string;
    id: number;
    idDepartement:number;
    idSports:Array<number>;

    constructor(id:number,name:string,idDepartement:number,idSports:Array<number>)
    {
      this.id=id;
      this.name=name;
      this.idDepartement=idDepartement;
      this.idSports=idSports;
    }
}
