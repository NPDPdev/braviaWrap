import { braviaREST } from "./braviaREST.ts";

export class braviaGuide{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"guide";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * The only function for the "guide" service
     * 
     *****/


    
    public getSupportedApiInfo(svcListIn:string[]){
        const jsonData = JSON.stringify({
            "method": "getSupportedApiInfo",
            "id": 1,
            "params": [{"services": svcListIn}],
            "version": "1.1"
            });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

}