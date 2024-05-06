function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a Sandwich with the following items\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("\nNow Enjoy Sandwich\n");
}
make_sandwich("Chicken", "Egg", "Mayo", "Cheese");
make_sandwich("Bread", "Butter", "Mayo");
make_sandwich("Bread", "Mayo", "Chicken", "Butter", "Catchup", "Shami", "Egg");
