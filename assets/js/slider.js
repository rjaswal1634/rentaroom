var slider_img1= document.querySelector('.slider-img');
var House1 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev1(){
	if(i <= 0) i = House1.length;	
	i--;
	return setImg1();			 
}

function next1(){
	if(i >= House1.length-1) i = -1;
	i++;
	return setImg1();			 
}

function setImg1(){
	return slider_img1.setAttribute('src', "House1/"+House1[i]);

}
var slider_img2 = document.querySelector('.slider-img-2');
var House2 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev2(){
	if(i <= 0) i = House2.length;	
	i--;
	return setImg2();			 
}

function next2(){
	if(i >= House2.length-1) i = -1;
	i++;
	return setImg2();			 
}

function setImg2(){
	return slider_img2.setAttribute('src', "House2/"+House2[i]);

}
var slider_img3 = document.querySelector('.slider-img-3');
var House3 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev3(){
	if(i <= 0) i = House3.length;	
	i--;
	return setImg3();			 
}

function next3(){
	if(i >= House3.length-1) i = -1;
	i++;
	return setImg3();			 
}

function setImg3(){
	return slider_img3.setAttribute('src', "House3/"+House3[i]);

}
var slider_img4 = document.querySelector('.slider-img-4');
var House4 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev4(){
	if(i <= 0) i = House4.length;	
	i--;
	return setImg4();			 
}

function next4(){
	if(i >= House4.length-1) i = -1;
	i++;
	return setImg4();			 
}

function setImg4(){
	return slider_img4.setAttribute('src', "House4/"+House4[i]);

}
var slider_img5 = document.querySelector('.slider-img-5');
var House5 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev5(){
	if(i <= 0) i = House5.length;	
	i--;
	return setImg5();			 
}

function next5(){
	if(i >= House5.length-1) i = -1;
	i++;
	return setImg5();			 
}

function setImg5(){
	return slider_img5.setAttribute('src', "House5/"+House5[i]);

}
var slider_img6 = document.querySelector('.slider-img-6');
var House6 = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
var i = 0;

function prev6(){
	if(i <= 0) i = House6.length;	
	i--;
	return setImg6();			 
}

function next6(){
	if(i >= House6.length-1) i = -1;
	i++;
	return setImg6();			 
}

function setImg6(){
	return slider_img6.setAttribute('src', "House6/"+House6[i]);

}