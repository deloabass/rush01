var box = { 
    width1: "* * * * * ", 
    height1: "*    "*", 
    height2: "*"    "*",
    width2:  "* * * * *", 

    printBox: function (height, width) { 
        return this.width1 + 
            '\n' + this.height1 + 
            '\n' + this.height2 + 
            '\n' + this.width2; 

    } 

} 

console.log(box.printBox());
