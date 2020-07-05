const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//for loop that prints out the contents of ingredients:
for(let i=0; i<ingredients.length;i++){
	console.log(ingredients[i]);
}

//while loop that prints out the contents of ingredients:
var count=0;
while(count<ingredients.length){
	console.log(ingredients[count]);
	count++;
}

//for loop that prints out the contents of ingredients backwards:
for(let i=ingredients.length-1; i>=0;i--){
	console.log(ingredients[i]);
}