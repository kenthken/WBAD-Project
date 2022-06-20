function changecolor(){
    var select = document.getElementById("select");
    var color = select.options[select.selectedIndex].value;
    document.getElementById("select").style.color=color;
}

