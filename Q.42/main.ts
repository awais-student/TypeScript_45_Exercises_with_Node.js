function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)

}

let magicianName = ["Harry Potter", "Sonu", "Rizwan"]

let great_magician = make_great (magicianName)

show_magicians(great_magician)
