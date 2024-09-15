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
guestList.forEach (oneGuest => console.log ( `Assalam.o.alikum  $ {oneGuest}  , would you like to dinner with me` ));

//imform that only two guest invited for dinner
console.log("unfortunatly , the new dinner table wont arrive a time ,so i can only invite two guests to dinner with me");

// using while loop to remove guest from the array until only two names remain
while(guestList.length > 2 ){
    let removeGuest = guestList.pop
    console.log(`sorry , ${removeGuest} I cant invite you to dinner`);
    }

    //printing a invitation to the last two gueston the list
    console.log("Invitations to the last 2 guests");
    guestList.forEach( lasttwo => console.log(`Lucky ${lasttwo} , you are still invited to dinner`));

    //removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("Empty List , guestList");






    







