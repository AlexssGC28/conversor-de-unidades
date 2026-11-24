function convertir(){
    let cm=parseFloat(document.getElementById("cm").value);
    let mm=cm*10;
    let metros=cm/100;
    let Kilometros=cm/100000;
    let Pulgadas=cm/2.54;
    document.getElementById("mm").innerHTML=""+mm.toFixed(2);
    document.getElementById("metros").innerHTML=""+metros.toFixed(2);
    document.getElementById("Kilometros").innerHTML=""+Kilometros.toFixed(2);
    document.getElementById("Pulgadas").innerHTML=""+Pulgadas.toFixed(2);
}