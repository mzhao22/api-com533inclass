var food = {
    {
		"name": "Sweet Soy Chicken Wings",
		"amount": "16",
    "type": "stir-fried",
		"ingredients": [
		"soysauce",
    "Chicken Wings",
    "sugar" ]},
	{
			"name": "Potatoes with Chicken Wings",
			"count": "8",
	    "type": "stir-fried",
			"materials": [
			"salt",
			"soysauce",
	    "sugar",
      "red skin potatoes" ]},
  {
      "name": "Other materials",
      "materials": [
        "basil leaf 1",
        "sesame 1 scoop"]
		}
  };

$('#user-form').on("submit", function(e){
	var food = $('#food').val();
  $('#result').append('<li> food </li>');
  e.preventDefault();
});

$('#food').on('focus', function(){
  console.log('')
});




//single food object or
