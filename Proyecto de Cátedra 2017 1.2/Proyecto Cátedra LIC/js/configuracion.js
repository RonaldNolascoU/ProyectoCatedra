//Funcionamiento de conf

function conf(){
    var cuentas = document.getElementById("select_cuentas")
    var tarjetas=document.getElementById("select_tarjetas");
    var cuentas_opciones = document.createElement("option");
    cuentas_opciones.text = localStorage.cuenta_incio;
    cuentas.add(cuentas_opciones, cuentas[0]);
    var tarjetas_opciones=document.createElement("option");
    tarjetas_opciones.text=localStorage.tarjeta_cuenta;
    tarjetas.add(tarjetas_opciones, tarjetas[0]);
    var cuenta_seleccionada = cuentas.options[cuentas.selectedIndex].value;
    var tarjeta_seleccionada= tarjetas.options[tarjetas.selectedIndex].value;
    
    document.getElementById("opciones_pago").addEventListener("change", function(){
        
        var pago=document.getElementById("opciones_pago");
        var pago_seleccionado=pago.options[pago.selectedIndex].value;
        
        if(pago_seleccionado=="Efectivo"){
            localStorage.pagos=pago_seleccionado;
        }
        if(pago_seleccionado=="Cuenta de ahorro"){
        cuentas.style.visibility='visible';
            localStorage.pagos=pago_seleccionado;
    }else{
        cuentas.style.visibility='hidden';
    }
    if(pago_seleccionado=="Tarjeta de crédito"){
        tarjetas.style.visibility='visible';
        localStorage.pagos=pago_seleccionado;
    }else{
        tarjetas.style.visibility='hidden';
        
    }   
    },false);
    
    
    
    var btn = document.getElementById("logeo").addEventListener('click',function(){
        
       //Creación de variables
       var cf_ingreso = document.getElementById("ingresocf").value;
        var rgx_efectivo=/^\d*$/;
        var bandera_conf=true;
     
        if(!rgx_efectivo.test(cf_ingreso)){
            bandera_conf=false;
        }
        if(bandera_conf){
                  //Quitar comillas ""
       var split_balance = cf_ingreso.split();
        if(localStorage.pagos=="Efectivo"){
            localStorage.balance_efectivo=split_balance;
            document.getElementById("mostrar-dinero").innerHTML="Balance efectivo: $"+localStorage.balance_efectivo;
        }
            if(localStorage.pagos=="Cuenta de ahorro"){
                localStorage.balance_cuentas=split_balance;
                document.getElementById("mostrar-dinero").innerHTML="Balance cuenta de ahorro: $"+localStorage.balance_cuentas;
            }
            if(localStorage.pagos=="Tarjeta de crédito"){
                localStorage.balance_tarjetas=split_balance;
                document.getElementById("mostrar-dinero").innerHTML="Balance tarjeta de crédito: $"+localStorage.balance_tarjetas;
            }
            alert("Correcto");
        }else{
            alert("Revise los datos");
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
    window.addEventListener("load", conf);
} else if (window.attachEvent) {
    window.attachEvent("onload", conf);
}

