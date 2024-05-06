function make_sandwich(...items:string[]){
    console.log("\nMaking a Sandwich with the following items\n")
    items.forEach(singleItem => console.log(singleItem))
    console.log("\nNow Enjoy Sandwich\n")
}

make_sandwich("Chicken", "Egg", "Mayo", "Cheese");
make_sandwich("Bread", "Butter", "Mayo");
make_sandwich("Bread", "Mayo", "Chicken", "Butter", "Catchup","Shami", "Egg")