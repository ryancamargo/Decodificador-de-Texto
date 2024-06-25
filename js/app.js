function teste(){
    document.getElementById("output").style.display = "initial";
    document.getElementById("copiar").style.display = "initial";
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = criptografar(out);
    document.getElementById("entry").value = "";
    document.getElementById("img").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
}

function teste2(){
    document.getElementById("output").style.display = "initial";
    document.getElementById("copiar").style.display = "initial";
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = descriptografar(out);
    document.getElementById("entry").value = "";
    document.getElementById("img").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
}

function copiar(){
    var cp = document.getElementById("output");
    //cp.select();
    //cp.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(cp.value);
    document.getElementById("output").value = "";
    document.getElementById("img").style.display = "initial";
    document.getElementById("output").style.display = "none";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("p1").style.display = "initial";
    document.getElementById("p2").style.display = "initial";
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