class Evt{
	constructor(){
		this.bindEvent();
	}
	bindEvent(){	
		$(".nav").on("click",function(){
			$(".nav ul li").slideToggle();
		})}
	}
	

new Evt();
