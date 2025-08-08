import { braviaREST } from "./braviaREST.ts";

export class braviaCEC{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"cec";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "cec" service
     * 
     *****/



    //outputs all arguments in and out of each method || NOT LISTED IN DOCUMENTATION
    public getMethodTypes(){
        const jsonData = JSON.stringify({
            "method": "getMethodTypes",
            "id": 1,
            "params": [""],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //Outputs list of unique API method versions || NOT LISTED IN DOCUMENTATION
    public getVersions(){
        const jsonData = JSON.stringify({
            "method": "getVersions",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    /*****
     * 
     * All "set" functions for "cec" service
     * 
     *****/



    //most likely for enabling/disabling CEC control as a whole || NOT LISTED IN DOCUMENTATION
    public setCecControlMode(boolIn:boolean){
        const jsonData = JSON.stringify({
            "method": "setCecControlMode",
            "id": 1,
            "params": [{"enabled":boolIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //for enabling/disabling auto input-switching when an MHL device is plugged in (read below)|| NOT LISTED IN DOCUMENTATION
    public setMhlAutoInputChangeMode(boolIn:boolean){
        const jsonData = JSON.stringify({
            "method": "setMhlAutoInputChangeMode",
            "id": 1,
            "params": [{"enabled":boolIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //enables/disables power feed mode for MHL connections|| NOT LISTED IN DOCUMENTATION
    //this took some digging. Mobile High-Definition Link is (was?) a standard with a micro-b cable featuring HDMI on the other end. 
    //Imagine a crusty version of DP Alt Mode over USB-C from 10+ years ago.
    public setMhlPowerFeedMode(boolIn:boolean){
        const jsonData = JSON.stringify({
            "method": "setMhlPowerFeedMode",
            "id": 1,
            "params": [{"enabled":boolIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //most likely for ??? || NOT LISTED IN DOCUMENTATION
    //Could be to allow/disallow external devices from turning on the TV and vice versa
    public setPowerSyncMode(sinkBoolIn:boolean, sourceBoolIn:boolean){
        const jsonData = JSON.stringify({
            "method": "setPowerSyncMode",
            "id": 1,
            "params": [{"sinkPowerOffSync":sinkBoolIn,"sourcePowerOnSync":sourceBoolIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

}