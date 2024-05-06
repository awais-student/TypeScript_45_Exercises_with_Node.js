var number = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
for (var _i = 0, number_1 = number; _i < number_1.length; _i++) {
    var onenumber = number_1[_i];
    var ordinalNumber = void 0;
    if (onenumber === 1) {
        ordinalNumber = "st";
    }
    else if (onenumber === 2) {
        ordinalNumber = "nd";
    }
    else if (onenumber === 3) {
        ordinalNumber = "rd";
    }
    else {
        ordinalNumber = "th";
    }
    console.log("".concat(onenumber).concat(ordinalNumber));
}
