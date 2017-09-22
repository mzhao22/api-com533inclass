var food = [
  "Sweet Soy Chicken wings" ];
    {
		"name": "Sweet Soy Chicken Wings",
		"amount": "16",
    "type": "stir-fried",
		"ingredients": [
		{"name":"salt","amount": "1T"},
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
      "name": "Other materials"
      "materials": [
        "basil leaf 1"
        "sesame 1 scoop",
      ]
		}
  ];

 $('#user-form').on("submit", function(e){
	 	var container = ["name", "count", "type", "materials",];
		var foodname = $('#food');

	$('#result').append("<li>" + foodname + "</li>");
	console.log("Caught submit event");
	e.preventDefault();

});


//single food object or
