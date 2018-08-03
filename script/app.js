$(document).ready(function(){
	
	
	
	var ingFilter = "https://www.thecocktaildb.com/api/json/v1/1/search.php?i=";
	var Drinksfilter = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";
	
	
	function getIngInfo(ing) {
		$.ajax({
			method:'GET',
			url: ingFilter+ing,
			success: function(response){
				if (response == null) {
					$("img").attr("src","/img/mystery.jpg");
					$("#infoparagraph").text("Sorry it seems like the ingredient u are trying to use is has not been used yet in a coktail that we know of!");
				} else 
				{
					var ingredient = response.ingredients[0];
					$("img").attr("src","https://www.thecocktaildb.com/images/ingredients/"+ ingredient.strIngredient +".png");
					$("#infoparagraph").text(ingredient.strDescription);
					fillingredientlist(ingredient.strIngredient);
				}
			}

		});
	};
	
	function fillingredientlist(ing) {
		$.ajax({
			method:'GET',
			url: Drinksfilter+ing,
			success: function(response){
				var drink = response.drinks;
				for (i = 0; i < drink.length; i++){
					$("#cocktails").append('<img src=' + '"' + drink[i].strDrinkThumb + '"' + ' title=' + '"' + drink[i].strDrink + '"' + ' />');
				}
			}

		});
	};

	
	
	
	
   $("#fnttype").change(function() {
	var $input = $( this );
	if ($input.is(':checked')) {
		$("p").toggleClass('gentleman cocktail');
		$("h4").toggleClass('gentleman cocktail');
	} else {
		$("p").toggleClass('cocktail gentleman');
		$("h4").toggleClass('cocktail gentleman');
	}
	});
	
	$("#site-style").change(function() {
	var $input = $( this );
	if ($input.is(':checked')) {
		$("#controls").css('background-color', '#6fea6f');
		$("#info").css('background-color', 'white');
		$("#information").css('background-color', 'white');
		$("#information").css('color', '#202020');
		$("#imagedisplay").css('background-color', 'white');
		$("#sbutton").css('color', '#6fea6f');
		$("#input-field-text").css('color', '#6fea6f');
	} else {
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
	if ($("#input-field-text").val().toLowerCase() == "") {
		$("img").attr("src","/img/no-ingredient.jpg");
		$("#infoparagraph").text("Sorry it seems like u forgot to enter an ingredient in the input field, please consider doing so to get the most out of this website!");
	} else {
		getIngInfo($("#input-field-text").val().toLowerCase())
	}
	});

});




