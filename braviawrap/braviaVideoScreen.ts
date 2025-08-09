import { braviaREST } from "./braviaREST.ts";

export class braviaVideoScreen{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"videoScreen";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for the "videoScreen" service
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


    //returns audio source screen (if only the developers had documented it, then i would know what that meant :) || NOT LISTED IN DOCUMENTATION
    public getAudioSourceScreen(){
        const jsonData = JSON.stringify({
            "method": "getAudioSourceScreen",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //returns the banner mode (if only the developers had documented it, then i would know what that meant :) || NOT LISTED IN DOCUMENTATION
    public getBannerMode(){
        const jsonData = JSON.stringify({
            "method": "getBannerMode",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

    //returns the picture in picture subscreen position || NOT LISTED IN DOCUMENTATION
    public getPipSubScreenPosition(){
        const jsonData = JSON.stringify({
            "method": "getPipSubScreenPosition",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //returns the scene setting || NOT LISTED IN DOCUMENTATION
    public getSceneSetting(){
        const jsonData = JSON.stringify({
            "method": "getSceneSetting",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //returns multi screen mode || NOT LISTED IN DOCUMENTATION
    public getMultiScreenMode(){
        const jsonData = JSON.stringify({
            "method": "getMultiScreenMode",
            "id": 1,
            "params": [],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

    
    
    /*****
     * 
     * All "set" functions for the "videoScreen" service
     * 
     *****/



    //change the scene setting: auto, general, auto24pSync (sets Cinema for 24hz content and auto for all else)
    public setSceneSetting(sceneIn:string){
        const jsonData = JSON.stringify({
            "method": "setSceneSetting",
            "id": 1,
            "params": [{"value":sceneIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //changes the audio source screen (i still don't know) || NOT LISTED IN DOCUMENTATION
    public setAudioSourceScreen(screenIn:string){
        const jsonData = JSON.stringify({
            "method": "setAudioSourceScreen",
            "id": 1,
            "params": [{"screen":screenIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //sets banner mode (?) || NOT LISTED IN DOCUMENTATION
    public setBannerMode(bannerIn:string){
        const jsonData = JSON.stringify({
            "method": "setBannerMode",
            "id": 1,
            "params": [{"value":bannerIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //sets multi-screen mode || NOT LISTED IN DOCUMENTATION
    public setMultiScreenMode(modeIn:string, optionIn:string){
        const jsonData = JSON.stringify({
            "method": "setMultiScreenMode",
            "id": 1,
            "params": [{"mode":modeIn, "option":optionIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //sets picture above picture size || NOT LISTED IN DOCUMENTATION
    public setPapScreenSize(screenIn:string, sizeIn:string){
        const jsonData = JSON.stringify({
            "method": "setPapScreenSize",
            "id": 1,
            "params": [{"screen":"string", "size":"string"}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //sets picture in picture position || NOT LISTED IN DOCUMENTATION
    public setPipSubScreenPosition(posIn:string){
        const jsonData = JSON.stringify({
            "method": "setPipSubScreenPosition",
            "id": 1,
            "params": [{"position":posIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

    //all I know is it returns json data with the same keys as it takes as inputs || NOT LISTED IN DOCUMENTATION
    public requestToNotifyScreenState(msmIn:string, posIn:string, audSrcIn:string, optIn:string){
        const jsonData = JSON.stringify({
            "method": "requestToNotifyScreenState",
            "id": 1,
            "params": [{"multiScreenMode":msmIn , "pipSubScreenPosition":posIn , "audioSourceScreen":audSrcIn , "option":optIn }],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }
}