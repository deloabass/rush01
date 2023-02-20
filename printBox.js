function printBox(width, height) {
    let boxH = "******";
    let boxW = "*    *";
    for (let i = 0; i < height; i++) {

        for (let j = 0; j < width; j++) {
            if (i == 0 || i <= width) {
                //  console.log();
            } else
                boxW += "";
        }
        // box += "\n";
    }
    console.log(boxH);
    console.log(boxW);
    console.log(boxW);
    console.log(boxH);
}
printBox(4, 6);
module.exports = printBox;