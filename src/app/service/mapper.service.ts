import {TownTO} from "../dto/town";
import {Town} from "../model/town";
import {RegionTO} from "../dto/region";
import {Region} from "../model/region";
import {DepartmentTO} from "../dto/department";
import {Department} from "../model/department";

export class Mapper
{
  //Si j'ai le temps faire de la généricité pour ne pas dupliquer
  arrayTownTOToArrayTown(townsTO:Array<TownTO>):Array<Town>
  {
    let towns:Array<Town>=new Array();
    townsTO.forEach((townTO)=>
    {
      towns.push(new Town(townTO));
    });
    return towns;
  }

  arrayRegionTOToArrayRegion(regionsTO:Array<RegionTO>):Array<Region>
  {
    let regions:Array<Region>=new Array();
    regionsTO.forEach((regionTO)=>
    {
      regions.push(new Region(regionTO));
    });
    return regions;
  }

  arrayDepartmentTOToArrayDepartment(departmentsTO:Array<DepartmentTO>):Array<Department>
  {
    let departments:Array<Department>=new Array();
    departmentsTO.forEach((departmentTO)=>
    {
      departments.push(new Department(departmentTO));
    });
    return departments;
  }


}