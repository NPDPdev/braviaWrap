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
     * The only function for the "videoScreen" service
     * 
     *****/


    
    public setSceneSetting(){
        //NYI
    }

}