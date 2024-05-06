let guestList = ["Sonu", "Waqas", "Waseem", "Sufiyan"];
let donotCome = guestList[0];
console.log(donotCome, "Nh aa skta");
guestList.splice(0, 1,"Amir")
console.log("Good News! We have Found a Bigger Table For Dinner");
guestList.unshift("Hasnain");
guestList.push("Iqra")
let middleIndex:number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Salaar")
console.log("Update List od Our Guest List")
guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}! We have Found a Bigger Table For Dinner.`));

