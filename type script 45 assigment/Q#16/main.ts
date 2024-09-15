//Creating a guest List Array
let guestList = ["Rabia","Hina" ,"Afnan" ,"mirha"   ];

//making variable for those guest who cant come
let dontCome =guestList [0];

//Print the name of guestwho cant come
console.log ( dontCome , "can not come");

//Add or remove value from guest list
guestList.splice (0, 1, "Shaista");

//message print for bigger table
console.log("Good news ! we  have found a bigger table for dinner.");

//Adding a new value at starting index of array
guestList.unshift("Marium");

//Adding a new value at ending index of array
guestList.push("Nida");

//Get a middle index of our guest list Array
let middleIndex: number = Math.floor(guestList.length /  2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0 , "Bushra");

//print message of update list
console.log("Updated list of our guests");

//sending a invitatation message to our guest one by one with their names
guestList.forEach (oneGuest => console.log( `Assalam.o.alikum  $ {oneGuest} ,would you like to dinner with me` ))



