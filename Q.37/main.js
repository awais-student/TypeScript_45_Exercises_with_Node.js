function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love Typescript"; }
    console.log("Create a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("Large", "I love programming language");
