console.log("plot twist: this is actually osu");

var random_num = function(x){//returns random from 0 to x
    return parseInt(Math.random()*x);
}

var list_of_circles = [];

setInterval(timer,500);
function timer(){   
    var hitcircle= {
	x:random_num(600)+100,
	y:random_num(400)+100,
	id:"hitcircle",
	approach_circle_size:70,//default?
	approach_filename:"approachcircle.png",
	overlay_id:"hitcircleoverlay"
    }
    list_of_circles.push(hitcircle);
    var c=document.getElementById("myCanvas");
    var ctx=c.getContext("2d");
    var img=document.getElementById(hitcircle.id);
    var img2=document.getElementById(hitcircle.overlay_id);
    ctx.drawImage(img,hitcircle.x,hitcircle.y);
    ctx.drawImage(img2,hitcircle.x,hitcircle.y);
    console.log(hitcircle);
}
