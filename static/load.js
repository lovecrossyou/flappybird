var load_state = {  
//预加载游戏资源
    preload: function() { 
        this.game.load.image('bg','static/assets/bg.png');
		this.game.load.image('bo','static/assets/back.png');
		this.game.load.image('menu','static/assets/menu.png');
		this.game.load.image('ready','static/assets/ready.png');
        this.game.load.image('bird', 'static/assets/bird.png');
        this.game.load.image('pipe', 'static/assets/pipe.png');
        this.game.load.audio('jump', 'static/assets/jump.wav');
		this.game.load.audio('dead','static/assets/dead.wav');
		this.game.load.image('gameover','static/assets/gameover.png');
    },

    create: function() {
        // 所有资源加载完成后，进入'menu'state
        this.game.state.start('menu');
		
    }
};