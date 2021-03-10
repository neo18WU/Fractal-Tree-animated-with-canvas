
function init(lar, deg, lon) { 
	//creation des eement canvas en fonctionde la demande
	
	var canvas1 = document.createElement("canvas");
	canvas1.setAttribute("class","fractal1");
	canvas1.width=1000;
    canvas1.height=800;
	document.body.appendChild(canvas1);
	var ctx = canvas1.getContext("2d");
	ctx.fillStyle = "green";
		
	var canvas2 = document.createElement("canvas");
	canvas2.setAttribute("class","fractal2");
	canvas2.width=1000;
    canvas2.height=800;
	document.body.appendChild(canvas2);
	var ctx2 = canvas2.getContext("2d");
	ctx2.fillStyle = "green";
	
	//initialisation des variables
var i = 0;
var j = 0;

var len = lon;// à modifier pour la taille de l'arbre
var firstLen = lon;//à modifier pour la taille de l'arbre
var totalLen = lon;//à modifier pour la taille de l'arbre

var lenBranch;
var angle = deg;// angle de départ à modifier pour l'inflection de l'arbre
var angleB = -angle;// angle de départ à modifier pour l'inflection des branches
var branchWidth = lar; //15 épaisseur de départ

var totalLenBranch;
var nbreB = 0;//initialisation nombre de branches
//***************************************************************
var k=0;
var firstbranchWidth = lar; //15
var angleFB = deg; // -15
var lenFB = lon;// à modifier pour la taille de l'arbre
var firstLenFB = lon;//à modifier pour la taille de l'arbre
var totalLenFB = lon;//à modifier pour la taille de l'arbre
var bbw; //important
//**********************************************************



function firstBranch() {
	firstbranchWidth -= 0.04;
	ctx2.fillRect(0,0,firstbranchWidth,4);	
	ctx2.translate(0,-3);
	var lag = angleFB/lenFB;
	ctx2.rotate(lag * Math.PI/180);
	
	var start = window.requestAnimationFrame(firstBranch);
	if (k >= totalLenFB)
	{
		angleFB += (deg/2);	// angle à modifier pour changer la forme de l'arbre*********************************
		totalLenFB += lenFB*0.9;
		lenFB = lenFB*0.9;
	}
	if (lenFB < 10) //modifier pour plus d'enroulement sur l'arbre
	{
		window.cancelAnimationFrame(start); //stop animation
		ctx2.restore();	
	}
	k++;
}

function draw() {
	branchWidth -= 0.04;

	ctx.fillRect(0,0,branchWidth,4); //varier hauteur pour changer la vitesse
	
	ctx.translate(0,-3);//varier hauteur pour changer la vitesse
	var lag = angle/len;
	ctx.rotate(lag * Math.PI/180);
	
	
	var start1 = window.requestAnimationFrame(draw);
	
	if (i >= totalLen)
	{	

		ctx.fillStyle = "green";
		angle += (deg/2);	// angle à modifier pour changer la forme de l'arbre*********************************
		totalLen += len*0.9;
		len = len*0.9;
		
		window.cancelAnimationFrame(start1);
		ctx.save();
		
		lenBranch = len*0.5;
		totalLenBranch = len*0.5;
		if ( deg < 0)
		{
		ctx.translate(0,0); //compensation dû à l'épaisseur si besoin
		}
		else 
		{
		ctx.translate(0,0);		
		}
		ctx.rotate(-deg * Math.PI/180);
		
		nbreB++;//incrementation du nombre de branches
		bbw = branchWidth/1.5;
		littleBranchRight();

	}
	
	if (len < 10) //modifier pour plus d'enroulement sur l'arbre
	{
		window.cancelAnimationFrame(start1); //stop animation
		ctx.restore();	
	}
	i++;
	
}

function littleBranchRight() {
	if ((nbreB== 1) || (nbreB > 5))//elimination des branches 1 et plus de 4
	{
		ctx.restore();
		draw();
	}
	else{
		bbw -= 0.04;
		
		ctx.fillRect(0,0,bbw,4);
		ctx.translate(0,-3);
		var lag1 = angleB/lenBranch;

		ctx.rotate(lag1 * Math.PI/180);
		
		var start11 = window.requestAnimationFrame(littleBranchRight);
		
		if (j >= totalLenBranch)
		{	
			ctx.fillStyle = "green";
			
			angleB -= deg;		
			
			totalLenBranch += lenBranch*0.9;
			lenBranch = lenBranch*0.9;
				
		}
		if (lenBranch < 5) //modifier pour plus d'enroulement des branches
		{
			window.cancelAnimationFrame(start11); //stop animation
			j = 0;
			angleB = -deg; //angle de départ
			ctx.restore();
			draw();				
		}
		j++;
	}
}
ctx.translate(canvas1.width/2, canvas1.height-100);
ctx.save();
ctx2.translate(canvas2.width/2, canvas2.height-100);
ctx2.save();
draw();
firstBranch();
}

function racine() {

	var x = (1/Math.log(i-0.64)+1) ;
	//var x = 1/Math.sqrt(i);

	ctx.fillRect(0,0,x*6,1);	
	ctx.translate(0,-1);
	ctx2.translate(-x*6,0);
	ctx2.fillRect(0,0,x*6,5);
	ctx2.translate(0,-1);
	ctx2.translate(x*6,0);
	
	var start = window.requestAnimationFrame(racine);
	i++;
	if (i == 100)
	{
		window.cancelAnimationFrame(start);
		ctx.restore();
		ctx2.restore();
		init(15,-8,40); // init(largeur de branche, angle de rotation initial, longueur branche 1);
		setTimeout(function(){
		init(15,12,40);
		}, 1000);
		setTimeout(function() {
		init(15,4,40);
		}, 2000);
	}
}
i=1;

	var canvas = document.createElement("canvas");
	canvas.setAttribute("class","fractal1");
	canvas.width=1000;
    canvas.height=800;
	document.body.appendChild(canvas);
	var ctx = canvas.getContext("2d");
	
	ctx.fillStyle = "green";
	ctx.translate(canvas.width/2+8, canvas.height);
	
	var canvas2 = document.createElement("canvas");
	canvas2.setAttribute("class","fractal2");
	canvas2.width=1000;
    canvas2.height=800;
	document.body.appendChild(canvas2);
	var ctx2 = canvas2.getContext("2d");
	ctx2.fillStyle = "green";
	ctx2.translate(canvas.width/2+8, canvas.height);
ctx.save();
ctx2.save();
racine();

