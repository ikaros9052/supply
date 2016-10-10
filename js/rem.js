window.onload=window.onresize=function(){
	var rem=document.documentElement.clientWidth*20/320;
	document.documentElement.style.fontSize = rem+'px';
};
$(function(){
	$(".spfl").hide();
	$("#spfl").click(function(){
		if($(".spfl").is(":visible")==true){
			$(".spfl").slideUp("slow");
			// $(".spfl").hide();
		}else{
			$(".spfl").slideDown("slow");
			// $(".spfl").show();
		}
	})
})