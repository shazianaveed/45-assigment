function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Potter", "Hassan", "Wahaj"];
var copy_magician_names = magician_names.slice();
var copy_great_magician = make_great(copy_magician_names);
console.log("Orginal Array\n");
show_magician(magician_names);
console.log("\nCopied Array\n");
show_magician(copy_great_magician);
