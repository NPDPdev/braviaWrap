import { braviaREST } from "./braviaREST.ts";

export class braviaAppControl{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"appControl";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "appControl" service
     * 
     *****/


    //send request and return output
    public getApplicationList(){
        const jsonData = JSON.stringify({
            "method": "getApplicationList",
            "id": 1,
            "params": [],
            "version": "1.0"
            })

        const returnData =this.senderInst.send(jsonData)

        return(returnData)
    }




    /*****
     * 
     * All "set" functions for "appControl" service
     * 
     *****/


    //send request and return output
    public setActiveApp(appURI:string){
        const jsonData = JSON.stringify({
            "method": "setActiveApp",
            "id": 1,
            "params": [{
                "data": "",
                "uri": appURI
                }],
            "version": "1.0"
            })

        const returnData =this.senderInst.send(jsonData)

        return(returnData)
    }
}