import {DepartmentTO} from "../dto/department";

export class Department
{
    name: string;
    id: number;
    idVilles:Array<number>;
    idRegion:number;
    getUrl:string;

    constructor(departmentTO:DepartmentTO)
    {
      this.name=departmentTO.name;
      this.id=departmentTO.id;
      this.idVilles=departmentTO.idVilles;
      this.idRegion=departmentTO.idRegion;
      this.getUrl="/get/department/"+this.id;
    }
}
