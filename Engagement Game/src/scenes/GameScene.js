import { CST } from "../CST";

var player, platforms, walls, portal, cursors, kerra, score = 0, scoreTxt, lives = 3 , lifeTxt, lifeImage ,roses, enemies, eWallOne, eWallTwo, sBtn, sBall, name, bubbleTxt, music;

export class GameScene extends Phaser.Scene{
    constructor(){
        super({
            key: CST.SCENES.GAME
        })
    }

create(){
    this.add.image(400, 300, "stage"); //Stage Background
    
    //Stage Background Music
    music = this.sound.add("game_bgm");
    music.play({
        loop: true
    });
    
    scoreTxt = this.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    lifeTxt = this.add.text(300, 16, "Lives Left:", { fontSize: "32px", fill: "#fff"});
    
    //Platforms
    platforms = this.physics.add.staticGroup(); //Creating Platform Object Static Group

    //Floor 1
    platforms.create(50, 490, "ground").setScale(.2).refreshBody();
    platforms.create(280, 490, "ground").setScale(.2).refreshBody();
    platforms.create(510, 490, "ground").setScale(.2).refreshBody();
    platforms.create(740, 440, "ground").setScale(.2).refreshBody();

    //Floor 2
    platforms.create(510, 390, "ground").setScale(.2).refreshBody();
    platforms.create(280, 390, "ground").setScale(.2).refreshBody();
    platforms.create(50, 345, "ground").setScale(.2).refreshBody();

    //Floor 3
    platforms.create(280, 293, "ground").setScale(.2).refreshBody();
    platforms.create(510, 293, "ground").setScale(.2).refreshBody();
    platforms.create(740, 245, "ground").setScale(.2).refreshBody();
    
    //Floor 4
    platforms.create(510, 200, "ground").setScale(.2).refreshBody();
    platforms.create(280, 200, "ground").setScale(.2).refreshBody();
    platforms.create(50, 150, "ground").setScale(.2).refreshBody();

    //Floor 5
    platforms.create(510, 100, "ground").setScale(.2).refreshBody();
    platforms.create(280, 100, "ground").setScale(.2).refreshBody();
    platforms.create(700, 100, "ground").setScale(.2).refreshBody();
    
    //Walls
    walls = this.physics.add.staticGroup();

    //Floor 1
    walls.create(200, 455, "wall").setVisible(false);
    walls.create(360, 455, "wall").setVisible(false);
    walls.create(430, 455, "wall").setVisible(false);
    walls.create(590, 455, "wall").setVisible(false);

    //Floor 2
    walls.create(200, 355, "wall").setVisible(false);
    walls.create(360, 355, "wall").setVisible(false);
    walls.create(430, 355, "wall").setVisible(false);
    walls.create(590, 355, "wall").setVisible(false);

    //Floor 3
    walls.create(200, 260, "wall").setVisible(false);
    walls.create(360, 260, "wall").setVisible(false);
    walls.create(430, 260, "wall").setVisible(false);
    walls.create(590, 260, "wall").setVisible(false);

    //Floor 4
    walls.create(200, 165, "wall").setVisible(false);
    walls.create(360, 165, "wall").setVisible(false);
    walls.create(430, 165, "wall").setVisible(false);
    walls.create(590, 165, "wall").setVisible(false);

    //Floor 5
    walls.create(190, 65, "wall").setVisible(false);
    walls.create(360, 65, "wall").setVisible(false);
    walls.create(430, 65, "wall").setVisible(false);
    walls.create(590, 65, "wall").setVisible(false);

    //Portal
    portal = walls.create(750, 60 ,"portal");

    //Brandon
    player = this.physics.add.sprite(50, 200, "brandon"); //Player
    player.setBounce(0.2);
    player.setCollideWorldBounds(true);
    

    //Brandon's Animations
    this.anims.create({
        key: 'left',
        frames: this.anims.generateFrameNumbers("brandon", {start:0, end:2}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'right',
        frames: this.anims.generateFrameNumbers("brandon", {start:4, end:7}),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'turn',
        frames: this.anims.generateFrameNumbers("brandon", {start:3, end:3}),
        frameRate: 10,
        repeat: -1
    });  

    
    //Kerra
    kerra = this.physics.add.sprite(650, 0, "kerra");
        kerra.setCollideWorldBounds(true);
    this.physics.add.collider(kerra, platforms);
    bubbleTxt;

    //Enemies
    enemies = this.physics.add.group();
    this.physics.add.collider(enemies, platforms);
    this.physics.add.overlap(enemies, walls, changeDirection, null, this);
    

    //Floor 1
    enemies.create(280, 450, 'clown');
    enemies.create(550,450, 'spider');

    //Floor 2
    enemies.create(280, 360, 'spider');
    enemies.create(550,360, 'clown');

    //Floor 3
    enemies.create(280, 250, 'clown');
    enemies.create(550, 250, 'spider');

    //Floor 4
    enemies.create(280, 150, 'spider');
    enemies.create(550, 150, 'clown');

    //Floor 5
    enemies.create(280,  50, 'clown').setScale(1.5);
    enemies.create(250,  50, 'clown').setScale(1.5);
    enemies.create(500, 50, 'spider').setScale(1.5);
    enemies.create(550, 50, 'spider').setScale(1.5);

    enemies.setVelocityX(-50);


     //Collectables 24 Roses
     roses = this.physics.add.group();

    //Floor 1
    roses.create(90, 450, 'rose');
    roses.create(250, 450, 'rose');
    roses.create(350, 450, 'rose');
    roses.create(490, 450, 'rose');
    roses.create(580, 450, 'rose');
    roses.create(750, 400, 'rose');

    //Floor 2
    roses.create(580, 360, 'rose');
    roses.create(490, 360, 'rose');
    roses.create(350, 360, 'rose');
    roses.create(250, 360, 'rose');
    roses.create(90, 300, 'rose');

    //Floor 3
    roses.create(250, 250, 'rose');
    roses.create(350, 250, 'rose');
    roses.create(490, 250, 'rose');
    roses.create(580, 250, 'rose');
    roses.create(750, 200, 'rose');
    
    //Floor 4
    roses.create(580, 150, 'rose');
    roses.create(490, 150, 'rose');
    roses.create(350, 150, 'rose');
    roses.create(250, 150, 'rose');

    //Floor 5
    roses.create(65, 50, 'rose')
    roses.create(350, 50, 'rose')
    roses.create(580, 50, 'rose');
    roses.create(490, 50, 'rose');

    roses.children.iterate(function (child) {
    
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    
    });

    sBall = this.physics.add.group();
    this.physics.add.collider(sBall,platforms);

    this.physics.add.collider(roses, platforms);
    this.physics.add.collider(sBall, enemies, killE, null, this);
    this.physics.add.overlap(player, roses, collectRose, null, this);
    this.physics.add.overlap(player, portal, gameWin, null, this);

   
    function gameWin(player, portal){
        if(score == 2400){
            music.stop();
            this.scene.start(CST.SCENES.WIN)
        }
    }
    function collectRose(player, rose){
        rose.disableBody(true,true);
        score += 100;
        scoreTxt.setText('Score: ' + score);
    }

    function killE(sBall, enemies){
        enemies.disableBody(true,true);
    }
    function changeDirection(enemies, walls){
        enemies.body.velocity.x *= -1    
    }
    sBtn = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes= 32);
    cursors = this.input.keyboard.createCursorKeys();
    }
update(){
    if (cursors.left.isDown)
    {
        player.setVelocityX(-160);
        player.anims.play('left', true);
    }
    else if (cursors.right.isDown)
    {
        player.setVelocityX(160);
        player.anims.play('right', true);
    }
    else
    {
        player.setVelocityX(0);
        player.anims.play('turn');
    }

    if(score < 2400){
        bubbleTxt = this.add.image(670, 40, "textBox").setScale(.45);
    }
    else{
        bubbleTxt = this.add.image(670, 40, "textBox2").setScale(.45);
    }

    //ShootBall
    if(cursors.left.isDown && sBtn.isDown)
    {
        sBall.create(player.x + 20, player.y, "ball");
        sBall.setVelocityX(-200);
        this.sound.play("sBall_bgm");
        
    }
    else if(cursors.right.isDown && sBtn.isDown)
    {
        sBall.create(player.x + 20, player.y, "ball");
        sBall.setVelocityX(200);
        this.sound.play("sBall_bgm");
    }

    //Jump
    if (cursors.up.isDown && player.body.touching.down)
    {
        player.setVelocityY(-240);
        this.sound.play("jump");
    }

    if (score === 2400){
        kerra.setFrame(3);
        //kerra.x = player.x - 20;
    }
    else{
       kerra.setFrame(7); 
    }

    
    //Enemies Patrol
    

    //Brandon Spawn Check
    if(player.y > 400)
    {
        this.physics.add.collider(player, platforms); //Collision Checker     
    }

    if(player.y > 550)
    {
        this.sound.play("pDie");
        player.x = 50;
        player.y = 450;
        lives--;
        console.log(lives);
    }

}
}
