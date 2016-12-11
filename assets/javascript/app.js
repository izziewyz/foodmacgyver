


$("#Search").on("click", function(event) {
          $("#izzie").empty();
          event.preventDefault();
          console.log(searchString);
          // var ingredient =  $("#searchTerm").val().trim();
          // console.log(ingredient);

          // event.preventDefault() can be used to prevent an event's default behavior.
          // Here, it prevents the submit button from trying to submit a form when clicked
 

 
 $.ajax({
    url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=" + searchString + "&limitLicense=false&number=5&ranking=2" , // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) {
      console.log(searchString);
       console.log(data);  

       for(var i=0; i < data.length; i++){

        // var recipediv = $('<div>') 

      var recipetitle =$("<p>")

    	 var recipeimage = $("<img>");

      recipetitle.text(data[i].title)

       recipeimage.attr("src", data[i].image);
       recipeimage.attr("class", "imagebutton")
       recipeimage.attr("data2", data[i].id);

       $("#izzie").prepend(recipetitle);
       $("#izzie").prepend(recipeimage);

       //$("#izzie").html(recipediv);


        //Change data.source to data.something , where something is whichever part of the object you want returned.
        //To see the whole object you can output it to your browser console using:
        //console.log(data);
       	//document.getElementById("output").innerHTML = data.source; 
        }
        $(".imagebutton").on("click", function(event) {

          $("#izzielist").empty();
          console.log($(this).attr("data2"));


           var id = $(this).attr("data2")

          $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id + '/analyzedInstructions?stepBreakdown=true', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data2) { 




      console.log(data2); 

      for(var j=0; j < data2[0].steps.length; j++){
       var steps2 =  data2[0].steps[j].step;
       var steps2p = $("<div>")

        steps2p.text(steps2);
       console.log(steps2);
       $("#izzielist").append(steps2p);
     }


    },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "zRcHmtL8t0mshjUaxi3lu62rtX3zp13tQn4jsnSVdh6tVZBd1p"); // Enter here your Mashape key
    }
});





        });


      },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "zRcHmtL8t0mshjUaxi3lu62rtX3zp13tQn4jsnSVdh6tVZBd1p"); // Enter here your Mashape key
    }
});




})
  


