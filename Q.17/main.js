var guestList = ["Sonu", "Waqas", "Waseem", "Sufiyan"];
var donotCome = guestList[0];
console.log(donotCome, "Nh aa skta");
guestList.splice(0, 1, "Amir");
console.log("Good News! We have Found a Bigger Table For Dinner");
guestList.unshift("Hasnain");
guestList.push("Pinki");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Salaar");
console.log("Update List od Our Guest List");
guestList.forEach(function (oneGuest) { return console.log("Salam ".concat(oneGuest, "! We have Found a Bigger Table For Dinner.")); });
console.log("Unfortunatly! The new dinner table won't arrive on time, so I can invite only two Guests to dinner with me");
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry! ".concat(removeGuest, " I can't invite you to dinner"));
}
console.log("Invitation to the last two Guest");
guestList.forEach(function (lastTwo) { return console.log("Luckly ".concat(lastTwo, ", You are still invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty List:", guestList);
