window.onload=window.onresize=function(){
	var rem=document.documentElement.clientWidth*20/320;
	document.documentElement.style.fontSize = rem+'px';
};
$(function(){
	$(".spfl").hide();
	$("#spfl").click(function(){
		if($(".spfl").is(":visible")){
			$(".spfl").fadeOut("slow");
			// $(".spfl").hide();
		}else{
			$(".spfl").fadeIn("slow");
			// $(".spfl").show();
		}
	})
})