import { CST } from "../CST";

export class WinScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.WIN
        })
    }
    create(){
        this.add.image(400, 300, "winScreen");
    }
    update(){

    }
}