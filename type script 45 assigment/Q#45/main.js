function creat_car(manufacture, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model,
    };
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value;
    });
    return car;
}
var my_car = creat_car("toyota", " corrola", "color: black", "sunroof: true");
console.log(my_car);
