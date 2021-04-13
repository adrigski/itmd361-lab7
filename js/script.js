function init(){
//add your javascript between these two lines of code
    
    var alertMeButton = document.getElementById("entrybutton");

    function alertMe() {
        var inText = document.getElementById("entryinput");
        var outText = document.getElementById("textoutput");
        alert("Adrian Grabowski: " + inText.value);
        outText.innerHTML = inText.value;
    }
    alertMeButton.addEventListener('click', alertMe);
}
window.addEventListener('load', init);


