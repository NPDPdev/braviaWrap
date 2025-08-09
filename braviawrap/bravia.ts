import { braviaGuide } from "./braviaGuide.ts";
import { braviaAppControl } from "./braviaAppControl.ts";
import { braviaAudio } from "./braviaAudio.ts";
import { braviaAvContent } from "./braviaAvContent.ts";
import { braviaEncryption } from "./braviaEncryption.ts";
import { braviaSystem } from "./braviaSystem.ts";
import { braviaVideo } from "./braviaVideo.ts";
import { braviaVideoScreen } from "./braviaVideoScreen.ts";
import { braviaCEC } from "./braviaCEC.ts";
import { braviaAccessControl } from "./braviaAccessControl.ts";


//Each service's wrapper class should be runnable on its own.
export class bravia {
    private panelAddress: string;
    private baseURL: string;
    private panelPSK;
    
    //these are public only because I like the direct access notation better than having to use an accessor function
    public guide: braviaGuide;
    public appControl: braviaAppControl;
    public audio: braviaAudio;
    public avContent: braviaAvContent;
    public encryption: braviaEncryption;
    public system: braviaSystem;
    public video: braviaVideo;
    public videoScreen: braviaVideoScreen;
    public cec:braviaCEC;
    public accessControl:braviaAccessControl;
    
    

    public constructor(panelAddress:string, panelPSK?:string){
        this.panelAddress = panelAddress;
        
        if(typeof panelPSK !== undefined) {
            this.panelPSK = panelPSK;
        }
        
        this.baseURL = "http://"+this.panelAddress+"/sony/";


        //This feels greasy to do, but gotta learn somehow!
        this.guide = new braviaGuide(this.baseURL,panelPSK);
        this.appControl = new braviaAppControl(this.baseURL,panelPSK);
        this.audio = new braviaAudio(this.baseURL,panelPSK);
        this.avContent = new braviaAvContent(this.baseURL,panelPSK);
        this.encryption = new braviaEncryption(this.baseURL,panelPSK);
        this.system = new braviaSystem(this.baseURL,panelPSK);
        this.video = new braviaVideo(this.baseURL,panelPSK);
        this.videoScreen = new braviaVideoScreen(this.baseURL,panelPSK);
        this.cec = new braviaCEC(this.baseURL,panelPSK);
        this.accessControl = new braviaAccessControl(this.baseURL,panelPSK);
        
    }


    public getAddress(){
        return this.panelAddress;
    }


}