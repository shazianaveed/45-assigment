function show_magician(magician: string[]){
    magician.forEach(name => console.log(name));
}
function make_great(magician: string[]){
 return magician.map( name => `The Great ${name}`);
}

let magician_names = [ "Harry Potter" ,"Hassan" ,"Wahaj"]


let copy_magician_names = magician_names.slice()


 let copy_great_magician = make_great(copy_magician_names);

console.log("Orginal Array\n");

 show_magician(magician_names);

 console.log("\nCopied Array\n");
 

 show_magician(copy_great_magician);



