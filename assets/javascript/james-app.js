var ingredientsArray = [];

function renderCheckboxes()
	{ 

		// Empties the div prior to adding new buttons (this is necessary otherwise you will have repeat buttons)
		$("#wellSection").empty();
		// Loops through the array of ingredients
		for (var i = 0; i < ingredientsArray.length; i++)
		{

			// Then dynamicaly generates buttons for each item in the array
			//----------------------------------------------------------------
		    // var a = $("<button>"); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    // // a.addClass('gifbutton'); // Added a class 
		    // a.attr("data-name", ingredientsArray[i]); // Added a data-attribute
		    // a.text(ingredientsArray[i]); // Provided the initial button text
		    // $("#wellSection").append(a); // Added the button to the HTML
		    //----------------------------------------------------------------
		    var a = $("<input>"); // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    // a.attr("class","ingredientCheckBox"); // Added a class 
		    a.attr("type", "checkbox"); // 
		    a.attr("value", ingredientsArray[i]); // 
		    a.attr("id", "checkboxID"+i);
		    console.log(a);
		    
		    var b = $("<label>");
		    b.attr("for", "checkboxID"+i);
		    b.attr("text", ingredientsArray[i]);
		    b.text(ingredientsArray[i]);
		    console.log(b);

		    $("#wellSection").append(a); // Added the checkbox to the HTML
		    $("#wellSection").append(b); // Added the label to the HTML
		    // $("#wellSection").append(b+ingredientsArray[i].val()); // Added the label to the HTML

		    //------------------------------------------------------------------
		}
	};

		// This function handles events where one button is clicked
	$("#add").on('click', function(){

		// This line of code will grab the input from the textbox
		var newIngredient = $("#searchTerm").val().trim();
		// Empty input field 
		// $('#gif-input').text(" ");
		// The movie from the textbox is then added to our array
		ingredientsArray.push(newIngredient);
		
		// Our function then runs which handles the processing of our buttons/topics array
		renderCheckboxes();
		$("#searchTerm").text = " ";
		// We have this line so that users can hit "enter" instead of clicking on submit button and it won't move to the next page
		return false;
	});

	// write stringify function here and replace commas with %whatever is needed for Ajax call