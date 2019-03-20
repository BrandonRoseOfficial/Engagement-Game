import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import {CopyScene} from "./scenes/CopyScene";
import {IntroScene} from "./scenes/IntroScene";
import {GameScene} from "./scenes/GameScene";
import {WinScene} from "./scenes/WinScene";

let game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 500 },
            debug: false
        }
    },
    scene: [
        LoadScene, MenuScene, CopyScene, IntroScene, GameScene, WinScene
    ]
});
