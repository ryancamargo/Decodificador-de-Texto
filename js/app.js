function teste(){
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = criptografar(out);
    document.getElementById("entry").value = "";
    document.getElementById("img").style.display = "none";
}

function teste2(){
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = descriptografar(out);
    document.getElementById("entry").value = "";
    document.getElementById("img").style.display = "none";
}

function copiar(){
    var cp = document.getElementById("output");
    //cp.select();
    //cp.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cp.value);
    document.getElementById("output").value = "";
    document.getElementById("img").style.display = "initial";
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