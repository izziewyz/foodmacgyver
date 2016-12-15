
// Declaring global variables to utilzie across all js files

var ingredientsArray = [];
var ingredientsString = "";
var searchString = "";



	// This function adds the ingredient when the add button is clicked
	$("#add").on('click', function()
	{
   		
   		// var letters = /^[A-Za-z]+$/;  
		
		// if 
			// Getting value from user input ingredient field and storing in newIngredient
			var newIngredient = $("#searchTerm").val().trim();
			
			// Creating an input tag and assigning attributes
			var a = $("<input>"); 
			a.attr("type", "checkbox"); // 

			// Creating label tag and assigning attributes
		    var b = $("<label>");
		    b.attr("class", "checkBoxText");
			b.text(newIngredient);

			// Prepending input tag inside label tag
		    b.prepend(a);

		    // Adding combined tags to html
		    $("#wellSection").append(b); // Added the checkbox to the HTML

			// Empty input field 
			$("#searchTerm").val("");

			// Next line of code to prevent page reload and allow user to hit the enter key instead of clicking
			return false;
	});

	
	// This function handles events when the add button is clicked
	$("#Clearbox").on('click', function()
	{
		// Removes parent (ie the label tag) associated with each "checked" checkbox
		$(":checked").parent().remove();
		// Next line of code to prevent page reload and allow user to hit the enter key instead of clicking
		return false;
	});


	$("#Search").on('click', function()
	{ 

		//-----------------------------------------------------------------------------
	    // Items between these 2 dashed lines added by James
	    // Re-initializes ingredientsArray before rebuilding the array based on what is left 
	    // in html after some checkboxes have been removed
	    ingredientsArray=[];
	    console.log(ingredientsArray);

	    // Loops through each checkbox object, grabs the text and stores in ingredientsArray
	    $(".checkBoxText").each(function()
	    {
	      ingredientsArray.push($(this).text());
	    })

	    ingredientsString = ingredientsArray.toString();
	    searchString = ingredientsString.replace(/,/gi , "%2C");
	    console.log(ingredientsArray);
	    console.log(searchString)
	    //-----------------------------------------------------------------------------

	});	