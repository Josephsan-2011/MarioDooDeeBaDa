function preload() {
	world_start = loadSound("world_start.wav");
    mareio_jump = loadSound("jump.wav")
	mario_gameover = loadSound("gameover.wav")
	mario_coin = loadSound("coin.wav")
	mario_kik = loadSound("kick.wav")
	mario_die = loadSound("mariodie.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas")
	instializeInSetup(mario);
	video = createCapture(VIDEO)
	video.size(600,300)
	video.parent('game_console')
	p1=ml5.poseNet(video,model_loaded)
  p1.on('pose',got_poses)
}
function got_poses (results) {
	//console.log(results)
	if (results.length>0) {
	  noseX=results[0].pose.nose.x
	  noseY=results[0].pose.nose.y
	}
  }
  function model_loaded() {
	console.log("initialized")
  }
function draw() {
	game()
}






