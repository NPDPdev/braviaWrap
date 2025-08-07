import { braviaREST } from "./braviaREST.ts";

export class braviaAppControl{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"appControl";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "appControl" service
     * 
     *****/


    //send request and return output
    public getApplicationList(){
        const jsonData = JSON.stringify({
            "method": "getApplicationList",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public getApplicationStatusList(){
        const jsonData = JSON.stringify({
            "method": "getApplicationStatusList",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData = this.senderInst.send(jsonData);

        return(returnData);
    }


    //Although the api docs state unencrypted text works, they also contradict themself. Assuming version 1.0 of this method must have allowed it, which has sense been changed.
    //NYI - for now, will return Sony API Error 7 when keyboard is down. When keyboard is up: HTTP Error 500 is returned if given junk data for key | If real but incorrect key is given, Sony API error 40002 occurs, as expected.
    public getTextForm(){
        const jsonData = JSON.stringify({
            "method": "getTextForm",
            "id": 1,
            "params": [{"encKey":"nobodywilleverseethis>:3"}],
            "version": "1.1"
        });

        const returnData = this.senderInst.send(jsonData);

        return(returnData);
    }


    public getWebAppStatus(){
        const jsonData = JSON.stringify({
            "method": "getWebAppStatus",
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


    /*****
     * 
     * All "set" functions for "appControl" service
     * 
     *****/


    
    public setActiveApp(appURI:string){
        const jsonData = JSON.stringify({
            "method": "setActiveApp",
            "id": 1,
            "params": [{
                "data": "",
                "uri": appURI
            }],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    public setTextForm(kbdInput:string,useEncryption?:boolean){


        if(useEncryption){
            //NYI - need to implement this and getTextForm encryption
            const jsonData = JSON.stringify({
                "method": "setTextForm",
                "id": 1,
                "params": [{
                    "encKey":"nobodywilleverseethisparttwo",
                    "text":"kbdInput except encrypted. probably will include that as a method in the encryption class, rather than doing it here."
                }],
                "version": "1.1"
            });

            const returnData = this.senderInst.send(jsonData);

            return(returnData);

        }else{
            const jsonData = JSON.stringify({
                "method": "setTextForm",
                "id": 1,
                "params": [kbdInput],
                "version": "1.0"
            });

            const returnData = this.senderInst.send(jsonData);

            return(returnData);
        }

    }


    //Admittedly haven't tested because I have more things to test and I didn't want to fumble behind my TV to replug - if it made it unresponsive.
    public terminateApps(){
        const jsonData = JSON.stringify({
            "method": "terminateApps",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData = this.senderInst.send(jsonData);

        return(returnData);
    }






}