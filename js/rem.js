window.onload=window.onresize=function(){
	var rem=document.documentElement.clientWidth*20/320;
	document.documentElement.style.fontSize = rem+'px';
};
$(function(){
	$(".spfl").hide();
	$("#spfl").on("click", function(e){
		if($(".spfl").is(":hidden")){
	    	$(".spfl").fadeIn("slow");
	    }else{
	    	$(".spfl").fadeOut("slow");
	    }
	    $(document).one("click", function(){
	        $(".spfl").hide();
	    });
	    e.stopPropagation();
	});
	$(".spfl").on("click", function(e){
	    e.stopPropagation();
	});
})