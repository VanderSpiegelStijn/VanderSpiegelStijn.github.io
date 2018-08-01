var fontbtn;
var sitebtn;

$(document).ready(function(){
   "use strict";

	InitVars();
	console.log(" init vars done");
	console.log(fontbtn);
	console.log(sitebtn);
});



function InitVars(){
	var fontbtn = document.getElementById("font-type");
	var sitebtn = document.getElementById("site-style");
}


if (fontbtn.attr('checked')) {
	console.log("true");
	$("p").toggleClass('gentleman cocktail');
	$("h4").toggleClass('gentleman cocktail');
} else {
	console.log("false");
	$("p").toggleClass('cocktail gentleman');
	$("h4").toggleClass('cocktail gentleman');
}

if (sitebtn.is(':checked')) {
	
	
} else {
	
}
