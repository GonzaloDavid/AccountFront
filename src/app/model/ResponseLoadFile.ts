import { ResultFile } from "./ResultFile";

export class ResponseLoadFile
{
    code:string;
    message:string;
    pathFile:string;
    resultFile: ResultFile;

    constructor()
    {
        this.code="";
        this.message="";
        this.pathFile="";
        this.resultFile=new ResultFile();
    }
}