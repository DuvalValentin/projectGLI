export class DepartmentTO
{
    name: string;
    id: number;
    idRegion: number;
    idVilles:Array<number>

    constructor(id:number,name:string,idRegion:number,idVilles:Array<number>)
    {
      this.id=id;
      this.name=name;
      this.idRegion=idRegion;
      this.idVilles=idVilles;
    }
}