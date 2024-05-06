let guestList = ["Sonu", "Waqas", "Waseem", "Sufiyan"];
let donotCome = guestList[0];
console.log(donotCome, "Nh aa skta");
guestList.splice(0,1, "Ali");
guestList.forEach(addGuest => console.log(`${addGuest}! Would you like dinner with me?`));