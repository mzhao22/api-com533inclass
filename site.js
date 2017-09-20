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
			"name": "potato",
			"number": "10",
	    "type": "stir-fried",
			"material": [
			"salt",
			"soysauce",
	    "Chicken Wings",
	    "sugar" ]}
  ]

 $("#user-form").on("submit", function(e){
	var foodname = $("#food").val();
	$("#result").append("<li>" + foodname + "</li>");
	console.log("Caught submit event");
	e.preventDefault();
});

 $("#food").on("focus", function(e){
	 console.log("Caught food focus event");
 });

//single food object or
