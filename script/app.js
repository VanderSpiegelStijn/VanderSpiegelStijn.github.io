$(document).ready(function(){

   $("#fnttype").change(function() {
	var $input = $( this );
	console.log($input.is(':checked'));
	if ($input.is(':checked')) {
		console.log("true");
		$("p").toggleClass('gentleman cocktail');
		$("h4").toggleClass('gentleman cocktail');
	} else {
		console.log("false");
		$("p").toggleClass('cocktail gentleman');
		$("h4").toggleClass('cocktail gentleman');
	}
	});
	
	$("#site-style").change(function() {
	var $input = $( this );
	console.log($input.is(':checked'));
	if ($input.is(':checked')) {
		console.log("true");
		$("#controls").css('background-color', '#6fea6f');
		$("#info").css('background-color', 'white');
		$("#information").css('background-color', 'white');
		$("#information").css('color', '#202020');
		$("#imagedisplay").css('background-color', 'white');
		$("input :text").css('color', '#6fea6f');
		$("input :submit").css('color', '#6fea6f');
	} else {
		console.log("false");
		$("p").toggleClass('cocktail gentleman');
		$("h4").toggleClass('cocktail gentleman');
	}
	});

});




