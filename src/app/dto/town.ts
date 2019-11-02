export class Town 
{
    name: string;
    id: number;
    idDepartement:number;
    idSports:Array<number>;

    constructor(name:string,id:number,idDepartement:number,idSports:Array<number>)
    {
        this.name=name;
        this.id=id;
        this.idDepartement=idDepartement;
        this.idSports=idSports;
    }
}
