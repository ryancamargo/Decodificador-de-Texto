function teste(){
    show("output");
    show("copiar");
    if(screen.width <= '1200px'){size();}
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
    if(screen.width <= '1200px'){size();}
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
    
    if(screen.width <= '1200px'){
        show("p1");
        show("p2");
        hide("output");
        hide("copiar");
        size2();
    }
    if(screen.width <= '390px'){
        size3();
    }
    else{
        show("img");
        show("p1");
        show("p2");
        hide("output");
        hide("copiar");
    }
}

function size(){
    var c = document.getElementById("right_background");
    c.setAttribute("style","height:343px");
}

function size2(){
    var c = document.getElementById("right_background");
    c.setAttribute("style","height:133px");
}

function size3(){
    var c = document.getElementById("right_background");
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