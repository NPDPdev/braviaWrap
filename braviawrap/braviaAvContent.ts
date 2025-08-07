import { braviaREST } from "./braviaREST.ts";

export class braviaAvContent{

    private fullURL: string;
    private senderInst;


    
    public constructor(baseURL:string, panelPSK?:string){
        this.fullURL = baseURL+"avContent";


        //creates instance of braviaREST class (sends data to TV) and passes it the URL and PSK (if applicable)
        if(typeof panelPSK !== undefined) {
            this.senderInst = new braviaREST(this.fullURL,panelPSK);
        }else{
            this.senderInst = new braviaREST(this.fullURL);
        }
        
    }




    /*****
     * 
     * All "get" functions for "avContent" service
     * 
     *****/



    //outputs how many of each port in each category (scheme)
    //uriIn can be: extInput:cec, extInput:component, extInput:composite, extInput:hdmi, extInput:widi (lmao), and tv:analog
    public getContentCount(uriIn:string){
        const jsonData = JSON.stringify({
            "method": "getContentCount",
            "id": 1,
            "params": [{"source": uriIn}],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //lists out the URI of each port in each category (scheme)
    //uriIn can be: extInput:cec, extInput:component, extInput:composite, extInput:hdmi, extInput:widi (lmao), and tv:analog
    public getContentList(uriIn:string, stIdxIn?:number, countIn?:number){
        const jsonData = JSON.stringify({
            "method": "getContentList",
            "id": 1,
            "params": [{
                "stIdx": stIdxIn,
                "cnt": countIn,
                "uri": uriIn
            }],
            "version": "1.5"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //outputs connection and naming info for each connected input.
    //"label" = user-picked, while "title" = system 'friendly' name for input
    public getCurrentExternalInputsStatus(){
        const jsonData = JSON.stringify({
            "method": "getCurrentExternalInputsStatus",
            "id": 1,
            "params": [],
            "version": "1.1"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //returns which "schemes" are usable by the device. (ex: extInput,tv)
    public getSchemeList(){
        const jsonData = JSON.stringify({
            "method": "getSchemeList",
            "id": 1,
            "params": [],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //pass in a scheme returned from getSchemeList. (ex: extInput,tv)
    public getSourceList(schemeIn:string){
        const jsonData = JSON.stringify({
            "method": "getSourceList",
            "id": 1,
            "params": [{"scheme":schemeIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }


    //returns with the source (extInput:hdmi/extInput:cec/etc), Title and URI of the input that is currently selected
    public getPlayingContentInfo(){
        const jsonData = JSON.stringify({
            "method": "getPlayingContentInfo",
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
     * All "set" functions for "avContent" service
     * 
     *****/

    

    //changes input
    public setPlayContent(uriIn:string){
        const jsonData = JSON.stringify({
            "method": "setPlayContent",
            "id": 1,
            "params": [{"uri":uriIn}],
            "version": "1.0"
        });

        const returnData =this.senderInst.send(jsonData);

        return(returnData);
    }

/*

    Additional methods in the avContent service which have no documentation on the wiki,
    but seemed like too much of a hassle to try and reverse engineer.
    [ 'deleteContent', [Array], [], '1.0' ],
    [ 'getContentList', [Array], [Array], '1.0' ],
    [ 'getContentList', [Array], [Array], '1.2' ],
    [ 'getFavoriteList', [], [Array], '1.0' ],
    [ 'getParentalRatingSettings', [], [Array], '1.0' ],
    [ 'setDeleteProtection', [Array], [], '1.0' ],
    [ 'setFavoriteContentList', [Array], [], '1.0' ],
    [ 'setPlayTvContent', [Array], [], '1.0' ],
    [ 'setTvContentVisibility', [Array], [], '1.0' ],
    [ 'setPlayTvContent', [Array], [], '1.1' ]

 */



}