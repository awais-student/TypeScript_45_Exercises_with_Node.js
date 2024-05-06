var userNames = ["Waqas", "Awais", "Waseem", "Admin", "Sufiyan"];
userNames.forEach(function (oneUser) {
    if (oneUser === "Admin") {
        console.log("Hello! ".concat(oneUser, " would you like to see a status report? "));
    }
    else {
        console.log("Hello! ".concat(oneUser, " thank you for logging in again."));
    }
});
