//Funcionamiento de ingresos

function ingresos(){
     document.getElementById("mostrar").innerHTML="Balance Actual: "+localStorage.saldo_incio;
         var rgx_efectivo=/^\d*$/;
        var rgx_motivo=/^[A-Za-z\_\-\.\s\xF1\xD1]+$/;
        //var rgx_cuenta=/^\d{8}-\d{1}$/;
    
    
var i_cuenta = document.getElementById("select_cuentas");
    var cuentas=document.createElement("option");
    
    
    cuentas.text=localStorage.cuenta_incio;
    i_cuenta.add(cuentas,i_cuenta[0]);
     var contador_cuentas= localStorage.getItem("cuenta_incio").length;
    
     var cuenta_seleccionada=i_cuenta.options[i_cuenta.selectedIndex].value;
    
    
    var btn = document.getElementById("logeo").addEventListener('click',function(){
        
        var bandera_ingresos=true;
       //Creación de variables
       var i_fecha = document.getElementById("ifecha").value;
       var i_motivo = document.getElementById("imotivo").value;
       var i_monto = document.getElementById("imonto").value;
       
        
        if(!rgx_motivo.test(i_motivo)){
            bandera_ingresos=false;
        }
        if(!rgx_efectivo.test(i_monto)){
            bandera_ingresos=false;
        }
        if(cuenta_seleccionada==""){
             bandera_ingresos=false;
        }
        if(bandera_ingresos){
           //Quitar comillas ""
       var split_fecha = i_fecha.split();
       var split_motivo = i_motivo.split();
       var split_monto = i_monto.split();
        
       //Almacenamiento local
       localStorage.fecha_ingresos = split_fecha;
       localStorage.motivo_ingresos = split_motivo;
       localStorage.saldo_ingresos = split_monto;
            alert("Ingresos agregados correctamente");
            var saldo_nuevo=(parseInt(localStorage.saldo_incio)+parseInt(localStorage.saldo_ingresos));
            //var split_saldo_nuevo= saldo_nuevo.split();
            localStorage.saldo_nuevo= saldo_nuevo;
            localStorage.saldo_incio=localStorage.saldo_nuevo;
       //localStorage.cuenta_ingresos = split4_in; 
        }else{
              alert("Revise los datos, por favor");
        }
       
        
    });
    
    //Mostrar datos
    var btn2 = document.getElementById("infobtn").addEventListener('click',function(){
        if(localStorage.getItem("fecha_ingresos")==null){
             document.getElementById("MFecha_in").innerHTML = "No posee ingresos"; 
        }else{
           
       document.getElementById("MFecha_in").innerHTML = "Fecha: " + localStorage.fecha_ingresos;
       document.getElementById("MMotivo_in").innerHTML = "Motivo: " + localStorage.motivo_ingresos; 
       document.getElementById("MMonto_in").innerHTML = "Monto: $" + localStorage.saldo_ingresos;
       document.getElementById("MCuenta_in").innerHTML = "Cuenta: " + cuenta_seleccionada;
        document.getElementById("MMonto_in2").innerHTML="Saldo anterior: $"+localStorage.saldo_incio;
            document.getElementById("MCuenta_in2").innerHTML="Saldo nuevo: $"+localStorage.saldo_nuevo;
        
        }
    });
    
}

//VERIFICAR SI PÁGINA ESTÁ CARGADA
if (window.addEventListener) {
    window.addEventListener("load", ingresos);
} else if (window.attachEvent) {
    window.attachEvent("onload", ingresos);
}

