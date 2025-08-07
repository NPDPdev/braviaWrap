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
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getInterfaceInformation(){
        const jsonData = JSON.stringify({
            "method": "getInterfaceInformation",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getLEDIndicatorStatus(){
        const jsonData = JSON.stringify({
            "method": "getLEDIndicatorStatus",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getNetworkSettings(ifaceIn?:string){
        const jsonData = JSON.stringify({
            "method": "getNetworkSettings",
            "id": 1,
            "params": [{"netif": ifaceIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getPowerSavingMode(){
        const jsonData = JSON.stringify({
            "method": "getPowerSavingMode",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getPowerStatus(){
        const jsonData = JSON.stringify({
            "method": "getPowerStatus",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getRemoteControllerInfo(){
        const jsonData = JSON.stringify({
            "method": "getRemoteControllerInfo",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getRemoteDeviceSettings(targetIn?:string){
        const jsonData = JSON.stringify({
            "method": "getRemoteDeviceSettings",
            "id": 1,
            "params": [{"target":targetIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getSystemInformation(){
        const jsonData = JSON.stringify({
            "method": "getSystemInformation",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //basically just an easy way to get the MAC address of the system
    public getSystemSupportedFunction(){
        const jsonData = JSON.stringify({
            "method": "getSystemSupportedFunction",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //literally just states if Wake On Lan is set to enabled
    public getWolMode(){
        const jsonData = JSON.stringify({
            "method": "getWolMode",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


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


    //This method is present but responds with 403 || NOT LISTED IN DOCUMENTATION
    //would return key/pair as so: {"isOn":boolean}
    public getDeviceMode(valIn:string){
        const jsonData = JSON.stringify({
            "method": "getDeviceMode",
            "id": 1,
            "params": [{"value":valIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //This method is present but responds with 403 || NOT LISTED IN DOCUMENTATION
    //would return large amount of data about attached storage devices
    public getStorageList(uriIn:string){
        const jsonData = JSON.stringify({
            "method": "getStorageList",
            "id": 1,
            "params": [{"uri":uriIn}],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    /*****
     * 
     * All "set" functions for "system" service
     * 
     *****/

    

    public requestReboot(){
        const jsonData = JSON.stringify({
            "method": "requestReboot",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //modeIn accepts: Demo, AutoBrightnessAdjust, Dark, SimpleResponse, Off
    public setLEDIndicatorStatus(modeIn:string, statusIn?:boolean){
        const jsonData = JSON.stringify({
            "method": "setLEDIndicatorStatus",
            "id": 53,
            "params": [{
                "mode": modeIn,
                "status": statusIn
            }],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //ISO-639 alpha-3 language codes accepted
    public setLanguage(langIn:string){
        const jsonData = JSON.stringify({
            "method": "setLanguage",
            "id": 1,
            "params": [{"language":langIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //Options are: off, low, high, pictureOff
    public setPowerSavingMode(psmIn:string){
        const jsonData = JSON.stringify({
            "method": "setPowerSavingMode",
            "id": 1,
            "params": [{"mode":psmIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public setWolMode(wolBoolIn:boolean){
        const jsonData = JSON.stringify({
            "method": "setWolMode",
            "id": 1,
            "params": [{"enabled":wolBoolIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

    
    //This method is present but responds with 403 || NOT LISTED IN DOCUMENTATION
    public setDeviceMode(valIn:string,boolIn){
        const jsonData = JSON.stringify({
            "method": "setDeviceMode",
            "id": 1,
            "params": [{"value":valIn, "isOn":boolIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //This method is present but responds with 403 || NOT LISTED IN DOCUMENTATION
    public mountStorage(uriIn:string){
        const jsonData = JSON.stringify({
            "method": "getStorageList",
            "id": 1,
            "params": [{"uri":uriIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    
}