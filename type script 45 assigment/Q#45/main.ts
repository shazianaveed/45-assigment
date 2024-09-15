function creat_car(manufacture , model, ...options) {

    let  car ={
        manufacture:manufacture,
        model: model,

    };

    options.forEach(options=>{
        let [key, value]= options.split(":")
        car[key.trim()] = value
    })
    return car;
}

let my_car = creat_car( "toyota"," corrola", "color: black","sunroof: true")

console.log(my_car);
