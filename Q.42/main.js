function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
var magicianName = ["Harry Potter", "Sonu", "Rizwan"];
var great_magician = make_great(magicianName);
show_magicians(great_magician);
