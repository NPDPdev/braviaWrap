import { braviaREST } from "./braviaREST.ts";

export class braviaEncryption{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"encryption";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * The only function(s) for the "encryption" service (for now >:3)
     * 
     *****/


    
    public getPublicKey(){
        const jsonData = JSON.stringify({
            "method": "getPublicKey",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData = this.senderInst.send(jsonData);

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

}