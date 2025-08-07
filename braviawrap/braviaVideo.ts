import { braviaREST } from "./braviaREST.ts";

export class braviaVideo{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"video";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * The only "get" function for the "video" service
     * 
     *****/


    //send request and return output
    public getPictureQualitySettings(){
        //NYI
    }



    /*****
     * 
     * The only "set" function for the "video" service
     * 
     *****/

    
    //send request and return output
    public setPictureQualitySettings(){
        //NYI
    }
}