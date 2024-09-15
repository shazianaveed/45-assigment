"use strict";
// array of current users
let current_users = ["Usman", "Ali", "Areeba", "Soha", "Osama"];
// array of new users
let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"];
// loop through new_users to check user names avability
new_users.forEach(new_one_user => {
    // making a condition for username already exist and save in our_condition
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    //print different message using if else statement
    if (our_condition) {
        console.log("Sorry ${new_one_user} is already taken!");
    }
    else {
        console.log(`This user name ${new_one_user} is available`);
    }
});
