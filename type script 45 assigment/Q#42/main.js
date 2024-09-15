function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "The Great ".concat(name); });
}
var magician_names = ["Harry Potter", "Hassan", "Wahaj"];
var great_magicians = make_great(magician_names);
show_magician(great_magicians);
// console.log(great_magicians);
