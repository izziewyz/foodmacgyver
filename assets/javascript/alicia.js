

 //User press a key

// document.addEventListener('keyup', function(event) {

//            var keyPress = event.keyCode;

//            //unless the key is a letter, the code will not run
//            if (!(keyPress >= 65 && keyPress <= 120) && (keyPress != 32 && keyPress != 0)) {
//                event.preventDefault();
//                // function() { ohSnap('A notification with default options')};
//                alert("Game only works with letter keys. No numbers or symbol keys");

//            }
// }); 

// $('#searchTerm').on('keyup'),function(){
// 	ohSnap('you need to type a letter !!');
// };     
function allLetter(inputtxt)  
  {  
   var letters = /^[A-Za-z]+$/;  
   if(inputtxt.value.match(letters))  
     {  
      return true;  
     }  
   else  
     {  
     alert("message");  
     return false;  
     }  
  }  
  

$('#add').on('click', function() { ohSnap(' you need to click a letter !!' , {color:'red'})});
// $('#red').on('click', function() { ohSnap('Oh Snap! You can\'t access this page!', {'color':'red'})});
// $('#green').on('click', function() { ohSnap('Ahh Yeah! Your account was created.', {'color':'green'})});
// $('#blue').on('click', function() { ohSnap('We are closed right now. Come back tomorrow.', {'color':'blue'})});
// $('#yellow').on('click', function() { ohSnap('A yellow alert for your... yellow needs...', {color:'yellow'})});
// $('#orange').on('click', function() { ohSnap('A fast one', {'color': 'orange', 'duration':'100'})});


