
fontbtn.change(function() {
	var $input = $( this );
	console.log($input.prop( "checked" ));
	if ($input.prop( "checked" ) == true) {
		console.log("true");
		$("p").toggleClass('gentleman cocktail');
		$("h4").toggleClass('gentleman cocktail');
	} else {
		console.log("false");
		$("p").toggleClass('cocktail gentleman');
		$("h4").toggleClass('cocktail gentleman');
	}
}).change();


