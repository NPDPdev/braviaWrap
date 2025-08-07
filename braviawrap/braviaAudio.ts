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


    //send request and return output
    public getSoundSettings(){
        //NYI
    }
    


    /*****
     * 
     * All "set" functions for "audio" service
     * 
     *****/

    
    //send request and return output
    public setAudioMute(){
        //NYI
    }


}