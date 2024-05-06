var current_Users = ["Awais", "waqas", "Waseen", "Sufiyan", "Sonu"];
var new_Users = ["Naveed", "Ali", "Waqas", "Rehman", "Sufiyan"];
new_Users.forEach(function (new_one_users) {
    var our_condition = current_Users.some(function (current_one_user) { return current_one_user.toLocaleLowerCase() === new_one_users.toLocaleLowerCase(); });
    if (our_condition) {
        console.log("Sorry! ".concat(new_one_users, " is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_users, " is available "));
    }
});
