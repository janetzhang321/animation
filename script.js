var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.fillStyle = "#ff80ff";
var rid;
var cb = document.getElementById("clear");
var sb = document.getElementById("stop");
var circleb = document.getElementById("circle");
var dvdb = document.getElementById("dvd");
var dvdimg = document.getElementById("dvdimg");

//click
var clear = function(){
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
}; 
cb.addEventListener("click", clear);

//stop
var stopIt = function() {
	window.cancelAnimationFrame(rid);
};
sb.addEventListener("click",stopIt);

//animate circle
var animateCircle = function() {

	x=0;
	//so it doesn't accelerate
	window.cancelAnimationFrame(rid);

	var addCircle = function () {
		//so it doesn't keep drawing circles on top of each other
		ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
		console.log(rid);
		ctx.beginPath();
		ctx.arc(c.width/2,c.height/2,x,0,Math.PI * 2);
		ctx.fill();
		x++;
		if (x<c.width/2) {
			rid=window.requestAnimationFrame( addCircle );
		}
		else { rid=window.requestAnimationFrame( subtractCircle ); };
	};

	var subtractCircle = function () {
		ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
		console.log(rid);
		ctx.beginPath();
		ctx.arc(c.width/2,c.height/2,x,0,Math.PI * 2);
		ctx.fill();
		x--;
		if (x>0) {
			rid=window.requestAnimationFrame( subtractCircle );
		}
		else { rid=window.requestAnimationFrame( addCircle ); };
	};

	rid=window.requestAnimationFrame( addCircle );
	console.log("done!");
};
circleb.addEventListener("click", animateCircle);
    
var animateDvd = function (rid) {
	window.cancelAnimationFrame(rid);

	x = Math.floor(Math.random() * (c.clientWidth-135));
	y = Math.floor(Math.random() * (c.clientHeight-78));
	forwardX = 1;
	forwardY = 1;

	var moveDvd = function () {
		//window.cancelAnimationFrame(rid);
		ctx.clearRect(0,0,c.clientWidth, c.clientHeight);
		console.log("rid"+rid);
		ctx.drawImage(dvdimg,x,y);
		ctx.beginPath();
		ctx.fill();
		x+=forwardX;
		y+=forwardY;
		if (x>=c.clientWidth-135 || x<=0){
			window.cancelAnimationFrame(rid);
			forwardX*=-1;
			x+=forwardX;
			y+=forwardY;
			rid = window.requestAnimationFrame(moveDvd);
		}
		else if (y>=c.clientWidth-78 || y<=0){
			window.cancelAnimationFrame(rid);
			forwardY*=-1;
			x+=forwardX;
			y+=forwardY;
			rid = window.requestAnimationFrame(moveDvd);
		};
		window.cancelAnimationFrame(rid);
		rid = window.requestAnimationFrame(moveDvd);
		console.log(x,y);
	};

	rid = window.requestAnimationFrame(moveDvd);
	console.log("done!");
};

dvdb.addEventListener("click", animateDvd);