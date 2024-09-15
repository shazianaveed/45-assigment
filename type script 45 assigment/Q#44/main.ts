function makeSandwich(...item: string[]){
    console.log("n\Making a sandwichwith the following item:\n");
    item.forEach(singleItem => console.log(singleItem) );
    console.log("Now Enjoy Sandwich");

}

makeSandwich("Chicken" ,"Cheese", "Mayo" ,"Egg");

makeSandwich("Bread" ,"Butter" );

makeSandwich( "Bread", "Butter" ,"Mayo", "Egg", "Cheese"," Tomato","Cucumber")