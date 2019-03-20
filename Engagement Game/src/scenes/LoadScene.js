import { CST } from "../CST";

export class LoadScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.LOAD
        })
    }
    init(){

    }
    preload(){
        //set screen resolution to: 800x600

        //load images, spritesheets, and sound
        this.load.image("menu_BG", "./assets/menu_BG.png");
        this.load.image("logo", "./assets/menu_logo.png");
        this.load.image("play_button", "./assets/play_button.png");
        this.load.image("op_button", "./assets/op_button.png");
        this.load.image("rose_icon", "./assets/rose_icon.png");
        this.load.image("stage", "./assets/stage.png");
        this.load.image("ground", "./assets/ground_R.png");
        this.load.image("landing", "./assets/landing.png");
        this.load.image("ramp", "./assets/ramp.png");
        this.load.image("wall", "./assets/plat_wall.png");
        this.load.image("portal", "./assets/portal.png");
        this.load.image("ball", "./assets/pokeball.png");
        this.load.image("life1", "./assets/life_Neck1.png");
        this.load.image("life2", "./assets/life_Neck2.png");
        this.load.image("life3", "./assets/life_Neck3.png");
        this.load.image("winScreen", "./assets/winscreen.png");
        this.load.image("textBox", "./assets/text_box.png");
        this.load.image("textBox2", "./assets/text_box2.png");
        this.load.audio("menu_bgm", "./assets/MainMenuMusic.m4a");
        this.load.audio("game_bgm", "./assets/InGameMusic.m4a");
        this.load.audio("jump", "./assets/Jump.m4a");
        this.load.audio("sBall_bgm", "./assets/Attack.m4a");
        this.load.audio("pDie", "./assets/PlayerDeath.m4a");
        /*this.load.audio("win_music", "./assets/win_music.mp3");*/
        this.load.spritesheet("brandon", "./assets/Brandon_R.png",
        {frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("kerra", "./assets/Kerra_R.png",
        {frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("clown", "./assets/Clown.png",
        {frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("spider", "./assets/Spider.png",
        {frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("rose", "./assets/Rose.png",
        {frameWidth: 32, frameHeight: 32
        });
        //Create a loading bar
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0x9400D3 //purple loading fill
            }
        })

        /*
        Loader Events:
            complete = when done loading everything
            progress - loader number progress in decimal
        */

        this.load.on("progress", (percent)=>{
            loadingBar.fillRect(0, this.game.renderer.height /2, this.game.renderer.width * percent, 50);
            console.log(percent * 100 + "%")
            console.log("done")
        })
    }
    create(){
        this.scene.start(CST.SCENES.MENU)
    }
}