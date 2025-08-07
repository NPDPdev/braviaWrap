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
     * The "only" "get" function for the "video" service
     * 
     *****/



    public getPictureQualitySettings(targetIn?:string){
        const jsonData = JSON.stringify({
            "method": "getPictureQualitySettings",
            "id": 1,
            "params": [{"target": targetIn}],
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
     * The only "set" function for the "video" service
     * 
     *****/

    
    
    public setPictureQualitySettings(targetIn:string, valueIn:string){
        const jsonData = JSON.stringify({
            "method": "setPictureQualitySettings",
            "id": 12,
            "params": [{"settings": [{
                "value": valueIn,
                "target": targetIn
            }]}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }
}