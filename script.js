var c = document.getElementById("slate");
var ctx = c.getContext('2d');
ctx.fillStyle = "#ff80ff";
var rid;

var button = document.getElementById("clear"); 
button.addEventListener("click", function(e){
    console.log("hi");	
    var ctx = c.getContext('2d');
    ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
    });


var stopIt = function() {
	window.cancelAnimationFrame(rid);
};

var sb = document.getElementById("stop");
sb.addEventListener("click",stopIt);


var animateDot = function() {

	x=0;
	window.cancelAnimationFrame(rid);

	var addCircle = function () {
		ctx.clearRect(0,0,c.clientWidth,c.clientHeight);
		console.log(rid);
		ctx.beginPath();
		ctx.arc(c.width/2,c.height/2,x,0,Math.PI * 2);
		ctx.fill();
		x++;
		if (x<c.width/2) {
			rid=window.requestAnimationFrame( addCircle );
		};
		//rid=window.requestAnimationFrame( subtractCircle );
		
	};

	var subtractCircle = function () {
		//window.cancelAnimationFrame(rid);
		ctx.arc(c.width/2,c.height/2,x,0,Math.PI * 2);
		ctx.fill();
		x--;
		if (x>=0) {
			rid=window.requestAnimationFrame( subtractCircle );
		};
	};

	addCircle();
	/*
		if (x=c.width/2) {
			subtractCircle();
		};
	*/
	console.log("done!");
};


	var subtractCircle = function () {
		//window.cancelAnimationFrame(rid);
		ctx.arc(c.width/2,c.height/2,x,0,Math.PI * 2);
		ctx.fill();
		x--;
		console.log("x="+x);
		if (x>=0) {
			rid=window.requestAnimationFrame( subtractCircle );
		};
	};



//rid=window.requestAnimationFrame( drawCircle );
c.addEventListener("click",animateDot);
    
    
