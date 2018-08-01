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
		$("#sbutton").css('color', '#6fea6f');
		$("#input-field-text").css('color', '#6fea6f');
	} else {
		console.log("false");
		$("#controls").css('background-color', '#2c9c91');
		$("#info").css('background-color', '#202020');
		$("#information").css('background-color', '#202020');
		$("#information").css('color', 'white');
		$("#imagedisplay").css('background-color', '#202020');
		$("#sbutton").css('color', '#2c9c91');
		$("#input-field-text").css('color', '#2c9c91');
	}
	});
	
	$("#sbutton").click(function() {
	console.log($("#input-field-text").val());
	if ($("#input-field-text").val() == "") {
		$("img").src("/img/no-ingredient.jpg");
		$("#infoparagraph").text("Sorry it seems like u forgot to enter an ingredient in the input field, please consider doing so to get the most out of this website!");
	} else {
		
	}
	});

});




