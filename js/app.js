function teste(){
    show("output");
    show("copiar");
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = criptografar(out);
    document.getElementById("entry").value = "";
    hide("img");
    hide("p1");
    hide("p2");
}

function teste2(){
    show("output");
    show("copiar");
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = descriptografar(out);
    document.getElementById("entry").value = "";
    hide("img");
    hide("p1");
    hide("p2");
}

function copiar(){
    var cp = document.getElementById("output");
    //cp.select();
    //cp.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cp.value);
    document.getElementById("output").value = "";
    show("img");
    show("p1");
    show("p2");
    hide("output");
    hide("copiar");
}

function show(id){
    document.getElementById(id).style.display = "initial";
}

function hide(id){
    document.getElementById(id).style.display = "none";
}

function criptografar(texto){
    return texto
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}

function descriptografar(texto){
    return texto
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}