
export class braviaREST {
    private fullURL: string;
    private packagedHeader;



    public constructor(fullURL:string, panelPSK?:string){
        this.fullURL = fullURL;

        if(typeof panelPSK !== undefined) {
            this.packagedHeader = {'X-Auth-PSK': panelPSK}
        }
        
        
    }




    //send data and return the message          IMPLEMENT SYSTEM USING "ID" FIELD TO ENSURE CORRECT ORDER OF RESPONSES RECEIVED. (Bravia's JSON-RPC protocol reserves value 0)
    public async send(jsonData?:string){

        try{

            const response = await fetch(this.fullURL, {
            method: 'POST',
            body: jsonData,
            headers: this.packagedHeader
        });

        //if HTTP response ! in range 200-299, throw an error
        if (!response.ok){
            const message = "Error: "+response.status;
            throw new Error(message);
        }

        //returns "result" field of response
        const data = await response.json();
        return data;



        }catch(error){
            console.error(error);
        }


    }




}
