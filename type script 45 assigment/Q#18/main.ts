//making a array of countries and print its orignal order
let countriesToVisit :string[]= ["Chaina", "Denmark","Brazil","Argentina"];
console.log("orignal order:", countriesToVisit );

//print the array in alphabetical orderwith out modifying the actuall array list
console.log("Alphabetical Order",[...countriesToVisit]. sort());

// show that the array is still inits orignal order
console.log("still in orignal order :",countriesToVisit );

//print the array in reversed order without modifiying the actual array list
console.log("Reverse order:", [...countriesToVisit]. reverse());

//show that the array is still in its orignal order
console.log("still in the orignal order:" ,countriesToVisit);

// we have change the orignal array order now
console.log("orignan Array Reverse :" , countriesToVisit.reverse());

// print the array to show that it's back toits orignal order
console.log("Back to orignal order:", countriesToVisit.reverse());

//print the array to showthat its order has been changed in Alphabetical order now
console.log("Sortedin alphabetical order:", countriesToVisit.sort());

//we have change again the orignal array order now in reverse order again 
console.log("orignal Array Reverse again :" ,countriesToVisit.reverse());





