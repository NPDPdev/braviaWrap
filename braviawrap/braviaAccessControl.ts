import { braviaREST } from "./braviaREST.ts";

export class braviaAccessControl{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"accessControl";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * The only function(s) for the "accessControl" service
     * 
     *****/


    
    //Bravia API allows for pin-based and PSK-based authentication.
    //This function prompts the TV to show a pin, and prompts the client to enter a pin in a "username/password popup" (when tested in chrome web console) || NOT LISTED IN DOCUMENTATION
    //can respond to "basic authentication" by adding the following header in a response after the request: headers.append('Authorization', 'Basic' + base64.encode(username + ":" + password));
    //NYI
    public actRegister(){
        const jsonData = JSON.stringify({
            "method": "actRegister",
            "id": 1,
            "params": [
                { clientid: "1984" , nickname: "myTestenvironment", "level": "private"},
                [{function:"WOL",value:"yes"}]
            ],
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