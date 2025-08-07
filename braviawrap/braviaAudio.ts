import { braviaREST } from "./braviaREST.ts";

export class braviaAudio{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"audio";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "audio" service
     * 
     *****/


    
    //Technically need to allow an input to conform to spec
    public getSoundSettings(){
        const jsonData = JSON.stringify({
            "method": "getSoundSettings",
            "id": 1,
            "params": [{"target":""}],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //Technically need to allow an input to conform to spec
    public getSpeakerSettings(){
        const jsonData = JSON.stringify({
            "method": "getSpeakerSettings",
            "id": 1,
            "params": [{"target":""}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getVolumeInformation(){
        const jsonData = JSON.stringify({
            "method": "getVolumeInformation",
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
    


    /*****
     * 
     * All "set" functions for "audio" service
     * 
     *****/

    
    
    public setAudioMute(muteToggle:boolean){
        const jsonData = JSON.stringify({
            "method": "setAudioMute",
            "id": 1,
            "params": [{"status": muteToggle}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    /*Can be a whole number to SET to, or can be +5 / -5 etc.
     *In my testing, is only able to increment +2,-2, until it reaches the "set" point - when using HDMI Arc system
     *Also, UI show/hide does not work with HDMI-Arc, or at least mine. Everything works with the default speakers
     */
     public setAudioVolume(volIn:string, targetIn = "speaker", showUI?:string){
        const jsonData = JSON.stringify({
            "method": "setAudioVolume",
            "id": 1,
            "params": [{
                "volume": volIn,
                "ui": showUI,
                "target": targetIn
            }],
            "version": "1.2"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //I KNOW this is hiding more functionality, likely there are more possibilities for the "target" value but none are specified.
    //Input string should be one of: speaker, audioSystem, speaker_hdmi(nope), hdmi(nope) - last two throw "illegal argument" for me.
    public setSoundSettings(valueIn = "audioSystem"){
        const jsonData = JSON.stringify({
            "method": "setSoundSettings",
            "id": 5,
            "params": [{"settings": [{
                "value": valueIn,
                "target": "outputTerminal"
            }]}],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    /**
     * lots of possible options here (I have not tested this)
     * if:
     * target = tvPosition ---> value = tableTop || wallMount
     * target = subwooferLevel ---> value (int) = [0,24]
     * target = subwooferFreq ---> value (int) = [0,30]
     * target = subwooferPhase ---> value = normal || reverse
     * target = subwooferPower ---> value = on || off
     */
    public setSpeakerSettings(targetIn:string, valueIn:string){
        const jsonData = JSON.stringify({
            "method": "setSpeakerSettings",
            "id": 62,
            "params": [{"settings": [{
                "value": valueIn,
                "target": targetIn
            }]}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }




    //This was a nightmare I never wanna manually interface with the audio service again i just want this done
}