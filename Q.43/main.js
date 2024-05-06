function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicianName = ["Harry Potter", "Sonu", "Rizwan"];
var copy_magician_name = magicianName.slice();
var copy_great_magician = make_great(copy_magician_name);
console.log("Original Array\n");
show_magicians(magicianName);
console.log("Copied Array\n");
show_magicians(copy_great_magician);
