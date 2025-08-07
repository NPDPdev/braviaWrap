import { braviaSystem } from "./braviaSystem.ts";
import { braviaAppControl } from "./braviaAppControl.ts";

//Each service's wrapper class should be runnable on its own.
export class bravia {
    private panelAddress: string;
    private baseURL: string;
    private panelPSK;
    
    //these are public only because I like the direct access notation better than having to use an accessor function
    public system: braviaSystem;
    public appControl: braviaAppControl;

    public constructor(panelAddress:string, panelPSK?:string){
        this.panelAddress = panelAddress;
        
        if(typeof panelPSK !== undefined) {
            this.panelPSK = panelPSK;
        }
        
        this.baseURL = "http://"+this.panelAddress+"/sony/";

        this.system = new braviaSystem(this.baseURL,panelPSK)
        this.appControl = new braviaAppControl(this.baseURL,panelPSK)
    }







}