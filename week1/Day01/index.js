var textfield;
var output;
var submit;

function setup() {
    noCanvas();
    textfield = select("#textarea") //creates a textfield (more space as in a paragraph). But in this case the Enter event is no longer valid, we have to have a submit button.
   // textfield = createInput("Enter your text here!");
    submit = select('#submit');
    submit.mousePressed(newText);
   // textfield.changed(newText); //whenever the user types Enter this calls the newText() function
   // textfield.input(newTyping); //calls the function newTyping calls the newTyping() function
    output = select('#output')
}

function newText() {
    //console.log(textfield.value());
    createP(textfield.value());

}

function newTyping() {
    //console.log(textfield.value());
}
