//Funcionamiento de gastos

function gastos() {
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
  
    
    var g_opciones = document.getElementById("opc_g");
         
    
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
    
     
    
    
    
    
    
    var rgx_efectivo = /^\d*$/;
    var btn = document.getElementById("logeo").addEventListener('click', function () {
            
  var motivo_seleccionado = g_opciones.options[g_opciones.selectedIndex].value;
        
        var bandera_gastos = true;
        //Creación de variables
        var g_fecha = document.getElementById("fecha_g").value;
        var g_monto = document.getElementById("monto_g").value;
   
        if (!rgx_efectivo.test(g_monto)) {
            bandera_gastos = false;
        }
        if (motivo_seleccionado == "Motivo") {
            bandera_gastos = false;
        }
        if(localStorage.getItem("pagos")==""){
            bandera_gastos=false;
        }
        
        if (bandera_gastos) {
            
               var split_fecha = g_fecha.split();
            var split_monto = g_monto.split();
            //Almacenamiento local
          localStorage.monto_gastos = split_monto;        
            localStorage.fecha_gastos = split_fecha;
            localStorage.motivo_gastos = motivo_seleccionado;
            if(localStorage.pagos=="Efectivo"){
                
                var efectivo_nuevo=(parseInt(localStorage.dinero_incio)-parseInt(localStorage.monto_gastos));
                localStorage.efectivo_nuevo=efectivo_nuevo;
            }
            if(localStorage.pagos=="Cuenta de ahorro"){
                
                var efectivo_cuenta_nuevo=(parseInt(localStorage.saldo_incio)-parseInt(localStorage.monto_gastos));
                localStorage.efectivo_cuenta_nuevo= efectivo_cuenta_nuevo;
            }
            if(localStorage.pagos=="Tarjeta de crédito"){
                
                var efectivo_tarjeta_nuevo=(parseInt(localStorage.tarjeta_saldo)-parseInt(localStorage.monto_gastos));
                localStorage.efectivo_tarjeta_nuevo=efectivo_tarjeta_nuevo;
            }
            
         

           

            alert("Gastos ingresados correctamente");
        } else {
            alert("No se pudo realizar la acción");
        }



    });

    //Mostrar datos
    var btn2 = document.getElementById("infobtn").addEventListener('click', function () {
        if (localStorage.getItem("fecha_gastos") == null) {
            document.getElementById("MFecha_g").innerHTML = "No posee gastos";
        } else {
            if(localStorage.pagos=="Efectivo"){
                
                  document.getElementById("MFecha_g").innerHTML = "Fecha: " + localStorage.fecha_gastos;
            document.getElementById("MOpciones_g").innerHTML = "Motivo: " + localStorage.motivo_gastos;
            document.getElementById("MMonto_g").innerHTML = "Monto: $" + localStorage.monto_gastos;
            document.getElementById("MCuenta_g").innerHTML = "Efectivo: $" +localStorage.dinero_incio;
                 document.getElementById("MMonto_g2").innerHTML = "Efectivo nuevo: $" +localStorage.efectivo_nuevo;
            }
            if(localStorage.pagos=="Cuenta de ahorro"){
               document.getElementById("MFecha_g").innerHTML = "Fecha: " + localStorage.fecha_gastos;
            document.getElementById("MOpciones_g").innerHTML = "Motivo: " + localStorage.motivo_gastos;
            document.getElementById("MMonto_g").innerHTML = "Monto: $" + localStorage.monto_gastos;
            document.getElementById("MCuenta_g").innerHTML = "Cuenta: " + cuenta_seleccionada;
                document.getElementById("MMonto_g2").innerHTML = "Monto: $" + localStorage.saldo_incio;
            document.getElementById("MCuenta_g2").innerHTML = "Monto nuevo: $" + localStorage.efectivo_cuenta_nuevo;
                
            }
            if(localStorage.pagos=="Tarjeta de crédito"){
                document.getElementById("MFecha_g").innerHTML = "Fecha: " + localStorage.fecha_gastos;
            document.getElementById("MOpciones_g").innerHTML = "Motivo: " + localStorage.motivo_gastos;
            document.getElementById("MMonto_g").innerHTML = "Monto: $" + localStorage.monto_gastos;
            document.getElementById("MCuenta_g").innerHTML = "Cuenta: " + tarjeta_seleccionada; 
                 document.getElementById("MMonto_g2").innerHTML = "Monto: $" + localStorage.tarjeta_saldo;
            document.getElementById("MCuenta_g2").innerHTML = "Monto nuevo: " + localStorage.efectivo_tarjeta_nuevo;
            }
           
        }
    });
}

//VERIFICAR SI PÁGINA ESTÁ CARGADA
if (window.addEventListener) {
    window.addEventListener("load", gastos);
} else if (window.attachEvent) {
    window.attachEvent("onload", gastos);
}
