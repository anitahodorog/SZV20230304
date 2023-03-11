//UNIT tesztek
function Teszt1(){
    var tesztNev = "Elso DIV container class";

    try{
        var kontener = document.querySelector("div");
        if(kontener.classList.contains("container")){   //a class lista tartalmazza e a contenert
            return[tesztNev, "Sikeres"];
        }
        else{
            return[tesztNev, "Sikertelen"];
        }
    }
    catch{
        return[tesztNev, "HIBA"];
    }
}

function Teszt2(){
    var tesztNev = "Elso H1 margo";

    try{
        var h1 = document.querySelector("h1");
        if(h1.classList.contains("my-2")){   //a class lista tartalmazza e 
            return[tesztNev, "Sikeres"];
        }
        else{
            return[tesztNev, "Sikertelen"];
        }
    }
    catch{
        return[tesztNev, "HIBA"];
    }
}

function Teszt3(){
    var tesztNev = "Elso input text";

    try{
        var inputok = document.querySelectorAll("input");

        if(inputok[0].type == "text"){
            return[tesztNev, "Sikeres"];
        }
        else{
            return[tesztNev, "Sikertelen"];
        }
    }
    catch{
        return[tesztNev, "HIBA"];
    }
}

function Teszt4(){
    var tesztNev = "Masodik input ID";

    try{
        var inputok = document.querySelectorAll("input");

        if(inputok[1].id == "email"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt5(){
    var tesztNev = "Elso input class";

    try{
        var inputok = document.querySelectorAll("input");

        if(inputok[0].classList.contains("form-control")){
            return [tesztNev, "Sikeres"]
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt6(){
    var tesztNev = "Gomb tipus";

    try{
        var gomb = document.querySelector("button");

        if(gomb.type == "button"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt7(){
    var tesztNev = "Option 3 db";

    try{
        var optok = document.querySelectorAll("option");

        if(optok.length == 3){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"]
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

function Teszt8(){
    var tesztNev = "Elso label tartalom";

    try{
        var labelek = document.querySelectorAll("label");

        if(labelek[0].innerHTML == "Teljes név"){
            return [tesztNev, "Sikeres"];
        }
        else{
            return [tesztNev, "Sikertelen"];
        }
    }
    catch{
        return [tesztNev, "HIBA"];
    }
}

//tábla sor készítő

function TrKeszito(eredmenyek){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(eredmenyek[0]));
    td2.appendChild(document.createTextNode(eredmenyek[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    return tr;
}

//Tesztek meghívása

function TesztHivasok(){
    var torzs = document.getElementById("torzs");

    torzs.appendChild(TrKeszito(Teszt1()));
    torzs.appendChild(TrKeszito(Teszt2()));
    torzs.appendChild(TrKeszito(Teszt3()));
    torzs.appendChild(TrKeszito(Teszt4()));
    torzs.appendChild(TrKeszito(Teszt5()));
    torzs.appendChild(TrKeszito(Teszt6()));
    torzs.appendChild(TrKeszito(Teszt7()));
    torzs.appendChild(TrKeszito(Teszt8()));

    torzs.appendChild(TrKeszito(Feladat1()));
    torzs.appendChild(TrKeszito(Feladat2()));
    torzs.appendChild(TrKeszito(Feladat3()));
    torzs.appendChild(TrKeszito(Feladat4()));
    torzs.appendChild(TrKeszito(Feladat5()));
   }

TesztHivasok();

function Feladat1(){
    var feladat1Nev = "2.div class listája row class-e";

    try{
        var rowClass = document.querySelectorAll("div");

        if(rowClass[1].classList.contains("row")){
            return[feladat1Nev, "Sikeres"];
        }
        else{
            return[feladat1Nev, "Sikertelen"];
        }
    }
    catch{
        return[feladat1Nev, "HIBA!!"];
    }
}

function Feladat2(){
    var feladat2Nev = "1.h1 class listája text-center";

    try{
        var h1Class = document.querySelectorAll("h1");

        if(h1Class[0].classList.contains("text-center")){
            return[feladat2Nev, "Sikeres"];
        }
        else{
            return[feladat2Nev, "Sikertelen"];
        }
    }
    catch{
        return[feladat2Nev, "HIBA!!"];
    }
}

function Feladat3(){
    var feladat3Nev = "3db label van-e";

    try{
        var label = document.querySelectorAll("label");

        if(label.length == 3){
            return[feladat3Nev, "Sikeres"];
        }
        else{
            return[feladat3Nev, "Sikertelen"];
        }
    }
    catch{
        return[feladat3Nev, "HIBA!!"];
    }
}

function Feladat4(){
    var feladat4Nev = "3. input id tartalom";

    try{
        var select = document.querySelectorAll("select");

        if(select[0].id ==  "munkakor"){
            return[feladat4Nev, "Sikeres"];
        }
        else{
            return[feladat4Nev, "Sikertelen"];
        }
    }
    catch{
        return[feladat4Nev, "HIBA!!"];
    }
}

function Feladat5(){
    var feladat5Nev = "2. option tartalom";

    try{
        var optionValue = document.querySelectorAll("option");

        if(optionValue[1].value ==  "jba"){
            return[feladat5Nev, "Sikeres"];
        }
        else{
            return[feladat5Nev, "Sikertelen"];
        }
    }
    catch{
        return[feladat5Nev, "HIBA!!"];
    }
}