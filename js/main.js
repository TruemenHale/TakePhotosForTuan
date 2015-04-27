$(function(){
	var oC=$('.container');
	var aPages=$('.container li');
	var oHolder=$('.container>ul');
	var oPlay=$('.play');
	var oCross=$('.cross');
	var oGame=$('.gamePage');
	oCross.css('left',$(window).width()*0.1375);
	oPlay.bind('click',function(){
		oHolder.css('left',-100+'%');
		gameInit(oGame,center);
	});
	oHolder.css('width',$(window).width()*2);
	aPages.css('height',$(window).height());
	oC.css('height',$(window).height());
	var center=($(window).height()*0.315);
});
function gameInit(obj,center){
	var r=2*Math.random();
	if(r<=1){
		r='tuanqi';
		deg=5;
		speed=2;
	}
	else{
		r='tuanhui';
		deg=7;
		speed=3;
	}
	function draw(){
		var time=2;
		n+=deg;
		m+=speed;
		if(m>$(window).height()*0.52){
			ogoal.remove();
			return;
		}
		ogoal.css('top',m);
		ogoal.css('transform','rotate('+n+'deg)');
		timer=setTimeout(function(){
			draw();
		},time);
		var t=m+','+n;
		return t;
	}
	$('<img />',{
		class:'logoTuan',
		src:'./images/'+r+'.png'
	}).appendTo(obj);
	var ogoal=$('.logoTuan');
	var oShut=$('.shut');
	ogoal.css('left',$(window).width()*0.41875);
	m=-120;
	n=360*Math.random();
	var time=1000;
	var timer=null;
	timer=setTimeout(function(){
		draw();
	},time);
	function returnT(t){
		return t;
	}
	oShut.click(function(){
		clearTimeout(timer);
		b=n%360-180;
		if(b<0){
			b+=180;
		}else{
			b=180-b;
		}
		b=140/180*(180-b);
		m=(center-Math.abs(m-center+25))*60/center;
		sum=b+m;
		if(r=='tuanhui'){
			sum*=1.05;
		}
		sum=Math.round(sum*1000)/1000;
		alert(sum);
	});
}