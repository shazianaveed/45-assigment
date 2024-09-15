function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love type script"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " print on shirt"));
}
make_shirt();
make_shirt("Medium");
make_shirt("small", "I love java script");
