

class Index{
	constructor(){
		this.click();
		this.hover();
		this.scale();
	}
	click(){
		var self = this;
		$(".lists").on("click",function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index = $(this).index();
			$(".list_box").eq(index).addClass("show").slideDown().siblings(".list_box").hide().removeClass("show");

			switch(index){
				case 0:
				$(".bg").css("background-image","url(images/1.jpg)");
				
				break;
				case 1:
				$(".bg").css("background-image","url(images/2.jpg)");
				break;
				case 2:
				$(".bg").css("background-image","url(images/3.jpg)");
				break;
				case 3:
				$(".bg").css("background-image","url(images/4.jpg)");
				break;
				case 4:
				$(".bg").css("background-image","url(images/5.jpg)");
				break;
			}

			
		})
	}
	hover(){
		$(".kuan").on("mouseenter",function(){
			$(this).animate({
				"width":100 + "%"
			},500).css("text-align","left");
			
			
			$(this).next().fadeOut(500).css("color","white").fadeIn(500);
		})
		
		$(".kuan").on("mouseleave",function(){
			
			$(this).animate({
				"width":22 + "%"
			},500);
			
			
			$(this).next().fadeOut(500).css("color","black").fadeIn(500)
			})
	}
	stoppropagation(e){
		if (e.stopPropagation) 
	      e.stopPropagation();
	    else
	      e.cancelBubble = true;
	}
	scale(){
					var self = this;
			$(".house li").on("click",function(e){
			self.stoppropagation(e);
			
			$(".bg").css("opacity","0.2")
			$(".xuanze").css("opacity","0.2")
			$(".list").css("opacity","0.2")
			$(".show_list").css("opacity","0.2")
			$(".logo").css("opacity","0.2")
			
				
	$(document).bind('click',function(){			    			$('.big_img').hide();
			$(".bg").css("opacity","1")
			$(".xuanze").css("opacity","1")
			$(".list").css("opacity","1")
			$(".show_list").css("opacity","1")
			$(".logo").css("opacity","1")
	  });
				
				$(".big_img").fadeIn();
				
				var idx = $(this).index();
				switch(idx){
					case 0:
					$(".path").attr("src","images/p1.jpg").fadeIn();
					break;
					case 1:
					$(".path").attr("src","images/p2.jpg");
					break;
					case 2:
					$(".path").attr("src","images/p3.jpg");
					break;
					case 3:
					$(".path").attr("src","images/p4.jpg");
					break;
					case 4:
					$(".path").attr("src","images/p5.jpg");
					break;
					case 5:
					$(".path").attr("src","images/p6.jpg");
					break;
					case 6:
					$(".path").attr("src","images/p7.jpg");
					break;
					case 7:
					$(".path").attr("src","images/p8.jpg");
					break;
					case 8:
					$(".path").attr("src","images/p9.jpg");
					break;
				}
			})
	}
}
new Index();
