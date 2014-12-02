console.log("plot twist: this is actually osu");

var random_num = function(x){//returns random from 0 to x
    return parseInt(Math.random()*x);
}

var list_of_circles = [];
var threshold =0;
setInterval(timer,500);

function timer(){   
    var c=document.getElementById("canvas");
    var ctx=c.getContext("2d");
    threshold=(threshold+1)%2;
    //console.log(threshold);
    if (threshold>0){
	//hitcircle is inside timer() to ensure randomness.
	var hitcircle= {
	    x:random_num(600)+50,
	    y:random_num(400)+50,
	    id:"hitcircle",
	    a_c_size:70,//approach circle size.-not yet implemented
	    //approach_filename:"approachcircle.png",
	    overlay_id:"hitcircleoverlay",
	    hit0:"0",
	    hit100:"100",
	    wait:0
	}
	list_of_circles.push(hitcircle);
	for (circle in list_of_circles){
	    circle.wait++;
	    
	}
	c.addEventListener('click',
			   function(e){
			       console.log(e);
			       console.log(this);
			   });
	var bg=document.getElementById("bg");
	ctx.drawImage(bg,0,0);	
	var img=document.getElementById(hitcircle.id);
	var img2=document.getElementById(hitcircle.overlay_id);
	ctx.drawImage(img,hitcircle.x,hitcircle.y);
	ctx.drawImage(img2,hitcircle.x,hitcircle.y);
    }
    //loop through list_of_circles, if 1 second passes, gg.
    //0.5 to appear, 0.5 hitframe.
    //gg = remove circle.
    //console.log(hitcircle); no more debug sir
}

    
/////////////////////////////////////////////legit stuff
