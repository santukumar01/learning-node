function chooseDiv() {
    if (document.getElementById("selectionDiv1").checked) {
        document.getElementById("div2").style.visibility = "hidden";
        document.getElementById("div1").style.visibility = "visible";
    } else {
        document.getElementById("div2").style.visibility = "visible";
        document.getElementById("div1").style.visibility = "hidden";
    }
}
