$(document).ready(function(){
   "use strict";

	InitVars();
	console.log(" init vars done");
});



function InitVars(){
	var fontbtn = document.getElementById("font-type");
	var sitebtn = document.getElementById("site-style");
}


if (fontbtn.is(':checked')) {
	$("p").toggleClass('gentleman cocktail');
	$("h4").toggleClass('gentleman cocktail');
} else {
	$("p").toggleClass('cocktail gentleman');
	$("h4").toggleClass('cocktail gentleman');
}

if (sitebtn.is(':checked')) {
	
	
} else {
	
}
