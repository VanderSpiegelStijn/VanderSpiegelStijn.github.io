
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
}).change();


