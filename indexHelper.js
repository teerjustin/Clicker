
function printPage() {
    window.print();
}

var count = 0;
var disp = document.getElementById("display");

function onClick(){
    count++;
    disp.innerHTML = count;
    console.log(count)
}