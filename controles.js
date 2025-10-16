function test() {
    if (document.getElementById("c5").selectedIndex == 0) {
        alert("Selecciona date");
        return false ;
    }
    ch = document.getElementById("c5").value
    if (ch.length != 3) {
        alert("code incorrecte");
        return false ;
    }
}