function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name))
}

function make_great(magicians:string[]){
    return magicians.map(name => `The Great ${name}`)

}

let magicianName = ["Harry Potter", "Sonu", "Rizwan"]
let copy_magician_name = magicianName.slice()
let copy_great_magician = make_great(copy_magician_name)
console.log("Original Array\n")
show_magicians(magicianName)
console.log("Copied Array\n")
show_magicians(copy_great_magician)