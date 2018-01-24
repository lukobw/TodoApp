$(function() {
	//toggle class on click
	$("ul").on("click", "li", function() {
		$(this).toggleClass("completed");
	});

	//remove li
	$("ul").on("click", "span", function(e) {
		$(this).parent().fadeOut(500, function(){
			$(this).remove();
		});
		e.stopPropagation();
	});
	//add todo 
	$("input[type='text']").keypress(function(e){
		if(e.which === 13) {
			var todoText = $(this).val();
			$(this).val("");
			$("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${todoText}</li>`);
		}
	});

	$(".fa-plus").on("click", function() {
		$("input[type='text']").fadeToggle();
	});

});
