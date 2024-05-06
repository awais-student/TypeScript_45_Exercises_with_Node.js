function make_shirt(size: string = "Large", printMessage: string = "I love Typescript"){
    console.log(`Create a ${size} shirt with the ${printMessage} print on shirt`)
}

make_shirt()

make_shirt("Medium");
make_shirt("Large", "I love programming language")