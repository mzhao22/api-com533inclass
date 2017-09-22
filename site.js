var food = [{
		"name": "Sweet Soysauce Chicken Wings",
		"count": "16",
    "type": "stir-fried",
		"materials": [
		"salt",
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

 $("#user-form").on("submit", function(e){
	 	var container = ["name", "count", "type", "materials",];
		var foodname = $('#food');.append

	$("#result").append("<li>" + foodname + "</li>");
	console.log("food");
	e.preventDefault();
 });

 $("#food").on("focus", function(e){
	 console.log("food");
 });
