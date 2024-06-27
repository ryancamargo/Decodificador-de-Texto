function crypto(){
    show("output");
    show("copiar");
    if(screen.width <= '1200'){size();}
    console.log(screen.width);
    let out = document.getElementById("entry").value;
    document.getElementById("output").value = criptografar(out);
    document.getElementById("entry").value = "";
    hide("img");
    hide("p1");
    hide("p2");
}

function decrypto(){
    show("output");
    show("copiar");
    if(screen.width <= '1200'){size();}
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
    
    // Tela para laptop e desktop
    if(screen.width > '1200'){
        show("img");
        show("p1");
        show("p2");
        hide("output");
        hide("copiar");
    }
    // Tela para tablets e iPads
    else if(screen.width <= '1200' && screen.width > '780'){
        show("p1");
        show("p2");
        hide("output");
        hide("copiar");
        size2();
    }
    // Tela para celulares e dispositivos mobile
    else if(screen.width <= '780'){
        show("p1");
        show("p2");
        hide("output");
        hide("copiar");
        size3();
    }
    
}
/*
function adjust(){
    var input = document.getElementById("entry");
    input.setAttribute("style","height:700px");
}*/

function size(){
    var c = document.getElementById("div_right");
    c.setAttribute("style","height:343px");
}

function size2(){
    var c = document.getElementById("div_right");
    c.setAttribute("style","height:133px");
}

function size3(){
    var c = document.getElementById("div_right");
    c.setAttribute("style","height:186px");
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