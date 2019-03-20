import { CST } from "../CST";

var actionBtn, startBtn, stopBtn, shutdown, music;


export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.MENU
        })
    }
    init(){
        var canvas = this.sys.game.canvas;
            var fullscreen = this.sys.game.device.fullscreen;
          
            if (!fullscreen.available) {
              return;
            }
            startBtn = document.createElement('button');
            stopBtn = document.createElement('button');
          
            startBtn.textContent = 'Start Fullscreen';
            stopBtn.textContent = 'Stop Fullscreen';
          
            canvas.parentNode.appendChild(startBtn);
            canvas.parentNode.appendChild(stopBtn);
          
            startBtn.addEventListener('click', function () {
              if (document.fullscreenElement) { return; }
          
              canvas[fullscreen.request]();
            });
          
            stopBtn.addEventListener('click', function () {
              document[fullscreen.cancel]();
            });
    }
    create(){
        //create images (a-z order)
        let menuBG = this.add.image(0,0, "menu_BG").setOrigin(0); //menu background
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.2, "logo").setScale(.9); //Video Game Logo
         
        //Play Button
        let playBtn = this.add.image(400, 400, "play_button").setScale(.5);
        //create sprites

        let rose_icon = this.add.image(300,6, "rose").setScale(.05);
        
        //create audio, disable pauseblur
        
        music = this.sound.add("menu_bgm");
        music.play({
            loop: true
        });

        //create animation

        //make image buttons interactive
        actionBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes= 90);
        playBtn.setInteractive();

        playBtn.on("pointerover", ()=>{
            console.log("hovahh")
        })
        playBtn.on("pointerout", ()=>{
            console.log("out")
        })
    }
    update(){
        if(actionBtn.isDown){
            music.stop();
            this.scene.start(CST.SCENES.GAME)
        }
    }
}