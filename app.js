const pret=document.getElementById("pret");
const moneda=document.getElementById("moneda");
const factura=document.getElementById("valFactura");
const transport=document.getElementById("valTransport");





var buton=document.getElementById("btn");
buton.addEventListener("click",function(){

  if(pret.value=="" || factura.value=="" || transport.value==""){
    alert("Trebuie completate toate casutele!")
    return
  }

  var pretTotal=pret.value*moneda.value*1.19+(pret.value*(parseInt(factura.value)+parseInt(transport.value))/factura.value);

  // console.log(pretTotal.toFixed(2));
  document.getElementById("pretAcasa").value=pretTotal.toFixed(2);
  document.getElementById("pret100").value=(pretTotal*2).toFixed(2);
  document.getElementById("pret150").value=(pretTotal*2.5).toFixed(2);
  document.getElementById("pret200").value=(pretTotal*3).toFixed(2);



});


