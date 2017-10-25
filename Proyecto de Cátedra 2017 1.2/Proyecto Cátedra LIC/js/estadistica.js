//Funcionamiento de estadistica

function estd(){
   
   
   
    
    document.getElementById("cont_opc").addEventListener("change", function(){
         var ingresosvgastos=document.getElementById("cont_opc"); 
    var ingresosvgastos_seleccionados=ingresosvgastos.options[ingresosvgastos.selectedIndex].value;
        if(ingresosvgastos_seleccionados=="Mensual"){
         document.getElementById("mes").style.visibility='visible';
        }else{
            document.getElementById("mes").style.visibility='hidden';
        }
        if(ingresosvgastos_seleccionados=="Anuales"){
            document.getElementById("anio").style.visibility='visible';
        }else{
            document.getElementById("anio").style.visibility='hidden';
        }
        if(ingresosvgastos_seleccionados=="Periodo"){
            document.getElementById("periodo").style.visibility='visible';
        }else{
            document.getElementById("periodo").style.visibility='hidden';
        }
        
    },false);
                
                                                         
          document.getElementById("ing_opc").addEventListener("change", function(){
         var ingresos=document.getElementById("ing_opc");
    var ingresos_seleccionados=ingresos.options[ingresos.selectedIndex].value;
        if(ingresos_seleccionados=="Mensual"){
         document.getElementById("mes2").style.visibility='visible';
        }else{
            document.getElementById("mes2").style.visibility='hidden';
        }
        if(ingresos_seleccionados=="Anuales"){
            document.getElementById("anio2").style.visibility='visible';
        }else{
            document.getElementById("anio2").style.visibility='hidden';
        }
        if(ingresos_seleccionados=="Periodo"){
            document.getElementById("periodo2").style.visibility='visible';
        }else{
            document.getElementById("periodo2").style.visibility='hidden';
        }
        
    },false);  
    
    
     document.getElementById("comp_opc").addEventListener("change", function(){
          var comparativos=document.getElementById("comp_opc");
    var comparativos_seleccionados=comparativos.options[comparativos.selectedIndex].value;
        if(comparativos_seleccionados=="Mensual"){
         document.getElementById("mes3").style.visibility='visible';
        }else{
            document.getElementById("mes3").style.visibility='hidden';
        }
        if(comparativos_seleccionados=="Anuales"){
            document.getElementById("anio3").style.visibility='visible';
        }else{
            document.getElementById("anio3").style.visibility='hidden';
        }
        if(comparativos_seleccionados=="Periodo"){
            document.getElementById("periodo3").style.visibility='visible';
        }else{
            document.getElementById("periodo3").style.visibility='hidden';
        }
        
    },false);  
    
    
    
    
    var btn1 = document.getElementById("logeo_1").addEventListener('click',function(){
        
       //Creación de variables
       var std_opc = document.getElementById("cont_opc").value;
       
       //Almacenamiento local
       localStorage.estadistica1 = JSON.stringify(std_opc);
        
        //Mostrar datos almacenados
    });
    
}

function estd2(){
    
    var btn2 = document.getElementById("logeo_2").addEventListener('click',function(){
        
       //Creación de variables
       var std_comp = document.getElementById("ing_opc").value;
       
       //Almacenamiento local
       localStorage.estadisticas2 = JSON.stringify(std_comp);
        
        //Mostrar datos almacenados
    });
    
}

function estd3(){
    
    var btn3 = document.getElementById("logeo_3").addEventListener('click',function(){
        
       //Creación de variables
       var std_nm = document.getElementById("comp_opc").value;
       
       //Almacenamiento local
       localStorage.estadisticas3 = JSON.stringify(std_nm);
        
        //Mostrar datos almacenados
    });
    
}



//VERIFICAR SI PÁGINAS ESTÁN CARGADAS
if (window.addEventListener) {
    window.addEventListener("load", estd);
} else if (window.attachEvent) {
    window.attachEvent("onload", estd);
}


if (window.addEventListener) {
    window.addEventListener("load", estd2);
} else if (window.attachEvent) {
    window.attachEvent("onload", estd2);
}

if (window.addEventListener) {
    window.addEventListener("load", estd3);
} else if (window.attachEvent) {
    window.attachEvent("onload", estd3);
}

