$(document).ready(function() {

	$(window).scroll(function(){
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
        if( scrollt >200 ){
            $("#gotop").fadeIn(400);
			$(".navbar").stop().fadeTo(400, 0.2);
        }else{
            $("#gotop").fadeOut(400);
			$(".navbar").stop().fadeTo(400, 1);
        }
    });
    $("#gotop").click(function(){
        $("html,body").animate({scrollTop:"0px"},200);
    });
	$(".navbar").mouseenter(function(){
		$(".navbar").fadeTo(100, 1);
	});
    $(".navbar").mouseleave(function(){
		var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
		if ( scrollt > 200) {
			$(".navbar").fadeTo(100, 0.2);
		}
	});
});
