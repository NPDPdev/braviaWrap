import { braviaREST } from "./braviaREST.ts";

export class braviaAvContent{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"avContent";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "avContent" service
     * 
     *****/


    //send request and return output
    public getContentCount(){
        //NYI
    }



    /*****
     * 
     * All "set" functions for "avContent" service
     * 
     *****/

    
    //send request and return output
    public setPlayContent(){
        //NYI
    }
}