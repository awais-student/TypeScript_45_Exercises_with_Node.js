var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countryToVisit = ["China", "Denmark", "Argentina", "Brazil"];
console.log("Original order:", countryToVisit);
console.log("Alphabetical order:", __spreadArray([], countryToVisit, true).sort());
console.log("Still in original order:", countryToVisit);
console.log("Reverce order:", __spreadArray([], countryToVisit, true).reverse());
console.log("Still in original order:", countryToVisit);
console.log("original order Reversed:", countryToVisit.reverse());
console.log("Back to original order:", countryToVisit.reverse());
console.log("Sorted in Alphabetical order", countryToVisit.sort());
console.log("Original Array reverce Again:", countryToVisit.reverse());
