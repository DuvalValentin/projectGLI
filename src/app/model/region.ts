import {RegionTO} from "../dto/region";

export class Region
{
    name: string;
    id: number;
    idDepartments:Array<number>;
    getUrl:string;

    constructor(regionTO:RegionTO)
    {
      this.name=regionTO.name;
      this.id=regionTO.id;
      this.idDepartments=regionTO.idDepartments;
      this.getUrl="/get/region/"+this.id;
    }
}
