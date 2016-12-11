
var ingredientsArray = [];
var ingredientsString = "";
var searchString = "";

function renderCheckboxes()
	{ 

		// Empties the div prior to adding new buttons (this is necessary otherwise you will have repeat buttons)
		$("#wellSection").empty();
		// Loops through the array of ingredients and generates check boxes and labels for each
		for (var i = 0; i < ingredientsArray.length; i++)
		{

		    var a = $("<input>"); 
		    // a.attr("class","ingredientCheckBox"); // Added a class 
		    a.attr("type", "checkbox"); // 
		    a.attr("value", ingredientsArray[i]); // 
		    a.attr("id", "checkboxID"+i);
		    console.log(a);
		    
		    var b = $("<label>");
		    b.attr("for", "checkboxID"+i);
		    b.attr("text", ingredientsArray[i]);
		    b.attr("class", "checkBoxText");
		    b.text(ingredientsArray[i]);
		    console.log(b);

		    $("#wellSection").append(a); // Added the checkbox to the HTML
		    $("#wellSection").append(b); // Added the label to the HTML
		    // $("#wellSection").append(b+ingredientsArray[i].val()); // Added the label to the HTML

		}
	};

		// This function handles events when the add button is clicked
	$("#add").on('click', function(){

		// This line of code will grab the input from the textbox
		var newIngredient = $("#searchTerm").val().trim();
		// Empty input field 
		// $('#gif-input').text(" ");
		// The movie from the textbox is then added to our array
		ingredientsArray.push(newIngredient);
		
		renderCheckboxes();
		$("#searchTerm").val("");
		//Converting array to string in format required by spoonacular api
		ingredientsString = ingredientsArray.toString();
		searchString = ingredientsString.replace(/,/gi , "%2C");
		// We have this line so that users can hit "enter" instead of clicking on submit button and it won't move to the next page
		return false;
	});

