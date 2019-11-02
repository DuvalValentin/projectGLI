export class Region 
{
    name: string;
    id: number;
    idDepartments:Array<number>

    constructor(name:string,id:number)
    {
        this.name=name;
        this.id=id;
    }
}
