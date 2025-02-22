import { Loadfile } from "./Loadfile";

export class ResultFile{

    errorList:string[];
    sucessfulList:any[];
    loadfileInserted: Loadfile;

    constructor()
    {
        this.errorList=[];
        this.sucessfulList=[];
        this.loadfileInserted=new Loadfile();
    }
}