import {TownTO} from "../dto/town";

export class Town
{
    name: string;
    id: number;
    idDepartement:number;
    idSports:Array<number>;
    getUrl:string;

    constructor(townTO:TownTO)
    {
      this.name=townTO.name;
      this.id=townTO.id;
      this.idDepartement=townTO.idDepartement;
      this.idSports=townTO.idSports;
      this.getUrl="/get/town/"+this.id;
    }
}
