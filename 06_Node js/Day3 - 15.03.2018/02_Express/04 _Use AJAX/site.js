(function(){
	
	"use strict";
	
	var buttonShowAnimal = document.getElementById("buttonShowAnimal");
	buttonShowAnimal.addEventListener("click", function(){
		
		$.ajax({
			
			type: "GET",
			
			url: "/animal",
			
			error: function(err){
				alert("Error: " + err.status + ", " + err.statusText);
			},
			
			success: function(result){
				document.getElementById("spanAnimal").innerHTML = "Animal: " + result.animal;
				document.getElementById("spanType").innerHTML = "Type: " + result.type;
				document.getElementById("spanColor").innerHTML = "Color: " + result.color;
				document.getElementById("spanAge").innerHTML = "Age: " + result.age;
			}
			
		});
		
	});
	
	var buttonShowAllAnimals = document.getElementById("buttonShowAllAnimals");
	buttonShowAllAnimals.addEventListener("click", function(){
		
		$.ajax({
			
			type: "GET",
			
			url: "/allAnimals",
			
			error: function(err){
				alert("Error: " + err.status + ", " + err.statusText);
			},
			
			success: function(result){
				var tableAllAnimals = document.getElementById("tableAllAnimals");
				
				for(var i = 0; i < result.length; i++) {
					var tdAnimal = "<td>" + result[i].animal + "</td>";
					var tdType = "<td>" + result[i].type + "</td>";
					var tdColor = "<td>" + result[i].color + "</td>";
					var tdAge = "<td>" + result[i].age + "</td>";
					var tr = "<tr>" + tdAnimal + tdType + tdColor + tdAge + "</tr>";
					tableAllAnimals.innerHTML += tr;
				}
				
			}
			
		});
	});
	
})();

