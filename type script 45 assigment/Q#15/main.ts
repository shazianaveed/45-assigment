let guestList = ["Rabia","Hina","Afnan","Mirha"];

let dontCome = guestList[0];

console.log(dontCome, "can not come.");

guestList.splice(0 ,1,  "Shaista" );

guestList.forEach(guest => console.log(`Assalam.o.alikum  ${guest}, would you like to dinner with me?`));
