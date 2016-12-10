


$("#Search").on("click", function(event) {
          event.preventDefault();

          var ingredient =  $("#searchTerm").val().trim();
          console.log(ingredient);

          // event.preventDefault() can be used to prevent an event's default behavior.
          // Here, it prevents the submit button from trying to submit a form when clicked
          








	//function doIt() { 

 //var output = 

 $.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + ingredient + "&limitLicense=false&number=5&ranking=2" , // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
       console.log(data);
    	//
        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        //console.log(data);
       	//document.getElementById("output").innerHTML = data.source; 
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "zRcHmtL8t0mshjUaxi3lu62rtX3zp13tQn4jsnSVdh6tVZBd1p"); // Enter here your Mashape key
    }
});
})
  


