var txt;

function preload() { //preLoad loads the file before setup() is called
    txt = loadStrings("rainbow.txt");
}

function setup() {
    noCanvas();
   // console.log(txt);
    createP(join(txt, "<br/>"));
}
