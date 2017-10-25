 //Funcionamiento de Inicio
 var arrayefectivo = new Array();
 var arraybanco = new Array();
 var arraycuenta = new Array();
 var arraysaldo = new Array();

 function perfil() {
     //INICIO
    
     //FIN

     var btn1 = document.getElementById("log_eo").addEventListener('click', function () {

         //Creación de variables
         var a = document.getElementById("efectivo").value;
         var b = document.getElementById("n_banco").value;
         var c = document.getElementById("nu_cuenta").value;
         var d = document.getElementById("saldo_a").value;

         var rgx_efectivo = /^\d*$/;
         var rgx_banco = /^([a-z\xc0-\xff]+)$/i;
         var rgx_cuenta = /^\d{8}-\d{1}$/;
         var bandera = true;
         if (!rgx_efectivo.test(a)) {
             bandera = false;
         }
         if (!rgx_banco.test(b)) {
             bandera = false;
         }
         if (!rgx_cuenta.test(c)) {
             bandera = false;
         }
         if (!rgx_efectivo.test(d)) {
             bandera = false;
         }
         if (bandera) {
     //INICIO
             //Quitar comillas ""
             var split1_in = a.split();
             //var split2_in = b.split();
             var split3_in = c.split();
             var split4_in = d.split();
             //Almacenamiento local
             localStorage.dinero_incio = split1_in;
             localStorage.banco_incio = b;
             localStorage.cuenta_incio = split3_in;
             localStorage.saldo_incio = split4_in;
     //FIN

             alert("Cuenta ingresada con éxito");
             window.location = "Cuentas.html";
         } else {
             alert("Error! Revise los datos!");
         }





     });
 }
var cuentas={
    cuenta:"",
    banco:"",
    saldo:0,
   };
var tarjetas={
    cuenta:"",
    banco:"",
    saldo:0,
    porcentaje:0,
    fecha:0,
   };
var ingresos={
    cuenta:"",
    motivo:"",
    saldo:0,
    fecha:"",
   };
var gastos={
    cuenta:"",
    motivo:"",
    saldo:0,
    fecha:"",
   };
var configuraciones={
    cuenta:"",
    minimo:"",
    fecha:"",
   };

 //VERIFICAR SI PÁGINA ESTÁ CARGADA
 if (window.addEventListener) {
     window.addEventListener("load", perfil);
 } else if (window.attachEvent) {
     window.attachEvent("onload", perfil);
 }
