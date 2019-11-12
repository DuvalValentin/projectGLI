export class Region
{
    name: string;
    id: number;
    idDepartements:Array<number>;

    constructor(id:number,name:string,idDepartements:Array<number>)
    {
      this.id=id;
      this.name=name;
      this.idDepartements=idDepartements;
    }
}
