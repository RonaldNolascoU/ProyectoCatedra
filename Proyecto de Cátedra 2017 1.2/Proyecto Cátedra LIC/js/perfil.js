 //Funcionamiento de Inicio
 var arrayefectivo = new Array();
 var arraybanco = new Array();
 var arraycuenta = new Array();
 var arraysaldo = new Array();

 function perfil() {
     //INICIO
     var contador = localStorage.getItem("count");
     arrayefectivo = new Array(parseInt(contador));
     arraybanco = new Array(parseInt(contador));
     arraycuenta = new Array(parseInt(contador));
     arraysaldo = new Array(parseInt(contador));
     for (i = 0; i <= contador - 1; i++) {
         arrayefectivo[i] = "";
         arraybanco[i] = "";
         arraycuenta[i] = "";
         arraysaldo[i] = "";
     }
     if (localStorage.getItem("dinero_incio") === null) {
         localStorage.dinero_incio = JSON.stringify(arrayefectivo);
         localStorage.banco_incio = JSON.stringify(arraybanco);
         localStorage.cuenta_incio = JSON.stringify(arraycuenta);
         localStorage.saldo_incio = JSON.stringify(arraysaldo);
     }
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

             AgregarCuentas(split1_in, b, split3_in, split4_in);

             //Almacenamiento local
             localStorage.dinero_incio = JSON.stringify(arrayefectivo);
             localStorage.banco_incio = JSON.stringify(arraybanco);
             localStorage.cuenta_incio = JSON.stringify(arraycuenta);
             localStorage.saldo_incio = JSON.stringify(arraysaldo);
     //FIN

             alert("Cuenta ingresada con éxito");
             window.location = "Cuentas.html";
         } else {
             alert("Error! Revise los datos!");
         }





     });
 }

 function AgregarCuentas(efectivo, banco, cuenta, saldo) {
     //INICIO
     var valor_efectivo = efectivo.toString();
     var valor_banco = banco.toString();
     var valor_cuenta = cuenta.toString();
     var valor_saldo = saldo.toString();

     var contador = localStorage.getItem("count");
     var online = localStorage.getItem("user_activo");

     for (i = 0; i <= contador - 1; i++) {
         if (online == i) {
             arrayefectivo[i] = valor_efectivo;
             arraybanco[i] = valor_banco;
             arraycuenta[i] = valor_cuenta;
             arraysaldo[i] = valor_saldo;
         } else {
             var stringDinero = "";

             var GetValor = localStorage.getItem("dinero_incio");
             var GetValor2 = localStorage.getItem("banco_incio");
             var GetValor3 = localStorage.getItem("cuenta_incio");
             var GetValor4 = localStorage.getItem("saldo_incio");

             //Convertir a arreglo
             var NuevoValor = GetValor.substring(1, GetValor.length - 1); //Elimina los []
             var NuevoValor2 = GetValor2.substring(1, GetValor2.length - 1); //Elimina los []
             var NuevoValor3 = GetValor3.substring(1, GetValor3.length - 1); //Elimina los []
             var NuevoValor4 = GetValor4.substring(1, GetValor4.length - 1); //Elimina los []
             
             var arregloDinero = NuevoValor.split(",");
             var arregloBanco = NuevoValor2.split(",");
             var arregloCuenta = NuevoValor3.split(",");
             var arregloSaldo = NuevoValor4.split(",");
             
             for (j = 0; j <= arregloDinero.length - 1; j++) {
                 if (arregloDinero[j] == "\"\"") { //si es comilla doble
                     arregloDinero[j] = "";
                     if (arrayefectivo[j] == "") {
                         arrayefectivo[j] = "";
                         arraybanco[j] = "";
                         arraycuenta[j] = "";
                         arraysaldo[j] = "";
                     }
                 } else {
                     var DineroSplit = arregloDinero[j].split("\"");
                     var BancoSplit = arregloBanco[j].split("\"");
                     var CuentaSplit = arregloCuenta[j].split("\"");
                     var SaldoSplit = arregloSaldo[j].split("\"");
                     
                     arregloDinero[j] = DineroSplit[1];
                     
                     arrayefectivo[j] = DineroSplit[1];
                     arraybanco[j] = BancoSplit[1];
                     arraycuenta[j] = CuentaSplit[1];
                     arraysaldo[j] = SaldoSplit[1];
                 }
             }
         }
     }
     //FIN

 }

 //VERIFICAR SI PÁGINA ESTÁ CARGADA
 if (window.addEventListener) {
     window.addEventListener("load", perfil);
 } else if (window.attachEvent) {
     window.attachEvent("onload", perfil);
 }
