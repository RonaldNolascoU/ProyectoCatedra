//Funcionamiento de Cuentas
 var arrayefectivo = new Array();
 var arraybanco = new Array();
 var arraycuenta = new Array();
 var arraysaldo = new Array();
function cuentas() {
    if (localStorage.getItem("dinero_incio") == null) {
        document.getElementById("mostrar-efectivo").innerHTML = "No posee efectivo";
    }else{
    document.getElementById("mostrar-efectivo").innerHTML = "Efectivo: $ " + localStorage.dinero_incio;
    }
    //Regex
    var rgx_efectivo = /^\d*$/;
    var rgx_banco = /^([a-z\xc0-\xff]+)$/i;
    var rgx_cuenta = /^\d{8}-\d{1}$/;
    var rgx_tarjetas = /^\d{4}-\d{4}-\d{4}-\d{4}$/
    var rgx_porcentaje = /^\d{1,2}$/



    //--Cuentas
    var cbtn1 = document.getElementById("btn_c").addEventListener('click', function () {
        var bandera_cuentas = true;
        //Creación de variables
        var c_banco = document.getElementById("cbanco1").value;
        var c_nmcuenta = document.getElementById("cncuenta1").value;
        var c_saldo = document.getElementById("csaldo1").value;

        if (!rgx_banco.test(c_banco)) {
            bandera_cuentas = false;
        }
        if (!rgx_cuenta.test(c_nmcuenta)) {
            bandera_cuentas = false;
        }
        if (!rgx_efectivo.test(c_saldo)) {
            bandera_cuentas = false;
        }
        if (bandera_cuentas) {
            //Quitar comillas ""
            var split_cuenta = c_nmcuenta.split();
            var split_saldo = c_saldo.split();


            //Almacenamiento local
            localStorage.banco_incio = JSON.stringify(c_banco);
            localStorage.cuenta_incio = split_cuenta;
            localStorage.saldo_incio = split_saldo;
            // localStorage.cuenta_percent2 = split5_cu;
            //localStorage.cuenta_fecha2 = split7_cu; 
            alert("Cuenta ingresada con éxito");
        } else {
            alert("Revise los datos");
        }
    });

    //--Tarjetas
    var cbtn2 = document.getElementById("btn_t").addEventListener('click', function () {
        //Creación variables tarjetas
        var bandera_tarjetas = true;
        var c_banco2 = document.getElementById("cbanco2").value;
        var c_nmcueta2 = document.getElementById("cncuenta2").value;
        var c_saldo2 = document.getElementById("csaldo2").value;
        var c_ptg2 = document.getElementById("cptg2").value;
        var c_fch2 = document.getElementById("cfch2").value;




        if (!rgx_banco.test(c_banco2)) {
            bandera_tarjetas = false;
        }
        if (!rgx_tarjetas.test(c_nmcueta2)) {
            bandera_tarjetas = false;
        }
        if (!rgx_efectivo.test(c_saldo2)) {
            bandera_tarjetas = false;
        }
        if (!rgx_porcentaje.test(c_ptg2)) {
            bandera_tarjetas = false;
        }
        if (bandera_tarjetas) {
            var split_cuenta2 = c_nmcueta2.split();
            var split_saldo2 = c_saldo2.split();
            var split_porcentaje = c_ptg2.split();

            localStorage.tarjeta_banco = JSON.stringify(c_banco2);
            localStorage.tarjeta_cuenta = split_cuenta2;
            localStorage.tarjeta_saldo = split_saldo2;
            localStorage.tarjeta_porcentaje = split_porcentaje;
            localStorage.fecha_vencimiento = c_fch2;
            alert("Tarjeta registrada con éxito");
        } else {
            alert("Revise la información de la tarjeta");
        }



    });



    //MOSTRAR INFORMACION
    var cbtn3 = document.getElementById("infobtn").addEventListener('click', function () {

        //Cuentas
        if (localStorage.getItem("banco_incio") == null) {
            document.getElementById("MBanco_c").innerHTML = "No posee cuentas"
        } else {
            document.getElementById("MBanco_c").innerHTML = "Banco: " + localStorage.banco_incio;
            document.getElementById("MCuenta_c").innerHTML = "Cuenta: " +localStorage.cuenta_incio;
            document.getElementById("MSaldo_c").innerHTML = "Saldo: $" + localStorage.saldo_incio;
        }
        //Tarjetas
        if (localStorage.getItem("tarjeta_banco") == null) {
            document.getElementById("MMBanco_c").innerHTML = "No posee tarjetas";
        } else {
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
                 var online = localStorage.getItem("user_activo");
            document.getElementById("MMBanco_c").innerHTML = "Banco: " + localStorage.tarjeta_banco;
            document.getElementById("MMSaldo_c").innerHTML = "Saldo: $" + localStorage.tarjeta_saldo;
            document.getElementById("MMPercent_c").innerHTML = "Porcentaje: " + localStorage.tarjeta_porcentaje + "%";
            document.getElementById("MMFecha_c").innerHTML = "Fecha vencimiento: " + localStorage.fecha_vencimiento;
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
    window.addEventListener("load", cuentas);
} else if (window.attachEvent) {
    window.attachEvent("onload", cuentas);
}
