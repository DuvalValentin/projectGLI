import {TownTO} from "../dto/town";

export class Town
{
    name: string;
    id: number;
    idDepartment:number;
    idSports:Array<number>;
    getUrl:string;

    constructor(townTO:TownTO)
    {
      this.name=townTO.name;
      this.id=townTO.id;
      this.idDepartment=townTO.idDepartement;
      this.idSports=townTO.idSports;
      this.getUrl="/get/town/"+this.id;
    }
}
