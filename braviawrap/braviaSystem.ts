import { braviaREST } from "./braviaREST.ts";

export class braviaSystem{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"system";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "system" service
     * 
     *****/


    //send request and return output
    public getCurrentTime(){
        const jsonData = JSON.stringify({
            "method": "getCurrentTime",
            "id": 1,
            "params": [],
            "version": "1.1"
            })

        const returnData =this.senderInst.send(jsonData)

        return(returnData)
    }




    /*****
     * 
     * All "set" functions for "system" service
     * 
     *****/

    
    //send request and return output
    public setLEDIndicatorStatus(sendJSON:string){
        //NYI
    }
}