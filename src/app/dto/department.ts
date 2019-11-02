import {Town} from "./town";
import {number} from "prop-types";

export class Department 
{
    name: string;
    id: number;
    idRegion: number;
    idVilles:Array<number>
    constructor(name:string,id:number,idRegion:number,idVilles:Array<number>)
    {
        this.name=name;
        this.id=id;
        this.idRegion= idRegion;
        this.idVilles=idVilles;
    }
}