
export class braviaREST {
    private fullURL: string;
    private packagedHeader;



    public constructor(fullURL:string, panelPSK?:string){
        this.fullURL = fullURL;

        if(typeof panelPSK !== undefined) {
            this.packagedHeader = {'X-Auth-PSK': panelPSK}
        }
        
        
    }




    //send data and return the message          IMPLEMENT TRY:CATCH     TRY WITH AND WITHOUT DATA
    public async send(jsonData?:string){
        const response = await fetch(this.fullURL, {
        method: 'POST',
        body: jsonData,
        headers: this.packagedHeader
    });

    const data = await response.json();
    return data;


    }




}
