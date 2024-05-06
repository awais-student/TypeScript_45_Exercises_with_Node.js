var guestList = ["Sonu", "Waqas", "Waseem", "Sufiyan"];
var donotCome = guestList[0];
console.log(donotCome, "Nh aa skta");
guestList.splice(0, 1, "Ali");
guestList.forEach(function (addGuest) { return console.log("".concat(addGuest, "! Would you like dinner with me?")); });
