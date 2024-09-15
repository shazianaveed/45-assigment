function makeSandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("n\Making a sandwichwith the following item:\n");
    item.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Now Enjoy Sandwich");
}
makeSandwich("Chicken", "Cheese", "Mayo", "Egg");
makeSandwich("Bread", "Butter");
makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", " Tomato", "Cucumber");
