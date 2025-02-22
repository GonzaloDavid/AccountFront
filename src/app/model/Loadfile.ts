export class Loadfile{
    dateCreate:Date;
    dateLastModify: Date;
    nameLoadFile: string;
    seqLoadFile: number;
    status:string;
    userCreate:number;
    userLasModify:number;

    constructor(){
        this.dateCreate=new Date();
        this.dateLastModify=new Date();
        this.nameLoadFile="";
        this.seqLoadFile=0;
        this.status='';
        this.userCreate=0;
        this.userLasModify=0;

    }

}