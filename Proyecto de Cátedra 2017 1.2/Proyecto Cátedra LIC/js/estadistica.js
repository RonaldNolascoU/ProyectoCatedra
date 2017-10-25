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
document.getElementById("graph").addEventListener('click', function(){
    var grafico = document.getElementById("grafico");
    grafico.style.visibility='visible';
     grafico2.style.visibility='hidden';
    grafico3.style.visibility='hidden';
grafico.width = 150;
grafico.height = 150;

var contexto = grafico.getContext("2d");

function dibujarPieza(contexto, centroX, centroY, radio, anguloInicio, anguloFin, color) {
    contexto.fillStyle = color;
    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.arc(centroX, centroY, radio, anguloInicio, anguloFin);
    contexto.closePath();
    contexto.fill();
}

var arreglo = {
    "Ingresos": 50,
    "Gastos": 50
};

var graficoDona = function (opciones) {
    this.opciones = opciones;
    this.canvas = opciones.canvas;
    this.contexto = this.canvas.getContext("2d");
    this.colors = opciones.colors;

    this.draw = function () {
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.opciones.data) {
            var val = this.opciones.data[categ];
            total_value += val;
        }

        var angulo_inicio = 0;
        for (categ in this.opciones.data) {
            val = this.opciones.data[categ];
            var angulo_porcion = 2 * Math.PI * val / total_value;

            dibujarPieza(
                this.contexto,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                angulo_inicio,
                angulo_inicio + angulo_porcion,
                this.colors[color_index % this.colors.length]
            );

            angulo_inicio += angulo_porcion;
            color_index++;
        }
        if (this.opciones.circuloCentro) {
            angulo_inicio = 0;
            for (categ in this.opciones.data) {
                val = this.opciones.data[categ];
                angulo_porcion = 2 * Math.PI * val / total_value;
                var radioDona = Math.min(this.canvas.width / 2, this.canvas.height / 2);
                var labelX = this.canvas.width / 2 + (radioDona / 2) * Math.cos(angulo_inicio + angulo_porcion / 2);
                var labelY = this.canvas.height / 2 + (radioDona / 2) * Math.sin(angulo_inicio + angulo_porcion / 2);

                if (this.opciones.circuloCentro) {
                    var agujero = (radioDona * this.opciones.circuloCentro) / 2;
                    labelX = this.canvas.width / 2 + (agujero + radioDona / 2) * Math.cos(angulo_inicio + angulo_porcion / 2);
                    labelY = this.canvas.height / 2 + (agujero + radioDona / 2) * Math.sin(angulo_inicio + angulo_porcion / 2);
                }

                var labelTexto = Math.round(100 * val / total_value);
                this.contexto.fillStyle = "#000";
                this.contexto.font = "bold 20px Calibri";
                this.contexto.fillText(labelTexto + "%", labelX, labelY);
                angulo_inicio += angulo_porcion;
            }

            dibujarPieza(
                this.contexto,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.opciones.circuloCentro * Math.min(this.canvas.width / 2, this.canvas.height / 2),
                0,
                2 * Math.PI,
                "#FFF"
            );
        }
    }
}

var graficoDona = new graficoDona(

    {
        canvas: grafico,
        data: arreglo,
        colors: ["#2E7D32", "#C62826"],
        circuloCentro: 0.001
    }
);

graficoDona.draw();

},false);

document.getElementById("graph2").addEventListener('click', function(){
    var grafico2 = document.getElementById("grafico2");
    grafico2.style.visibility='visible';
    grafico.style.visibility='hidden';
    grafico3.style.visibility='hidden';
grafico2.width = 150;
grafico2.height = 150;

var contexto = grafico2.getContext("2d");

function dibujarPieza(contexto, centroX, centroY, radio, anguloInicio, anguloFin, color) {
    contexto.fillStyle = color;
    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.arc(centroX, centroY, radio, anguloInicio, anguloFin);
    contexto.closePath();
    contexto.fill();
}

var arreglo = {
    "Ingresos": 50,
    "Gastos": 50,
};

var graficoDona = function (opciones) {
    this.opciones = opciones;
    this.canvas = opciones.canvas;
    this.contexto = this.canvas.getContext("2d");
    this.colors = opciones.colors;

    this.draw = function () {
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.opciones.data) {
            var val = this.opciones.data[categ];
            total_value += val;
        }

        var angulo_inicio = 0;
        for (categ in this.opciones.data) {
            val = this.opciones.data[categ];
            var angulo_porcion = 2 * Math.PI * val / total_value;

            dibujarPieza(
                this.contexto,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                angulo_inicio,
                angulo_inicio + angulo_porcion,
                this.colors[color_index % this.colors.length]
            );

            angulo_inicio += angulo_porcion;
            color_index++;
        }
        if (this.opciones.circuloCentro) {
            angulo_inicio = 0;
            for (categ in this.opciones.data) {
                val = this.opciones.data[categ];
                angulo_porcion = 2 * Math.PI * val / total_value;
                var radioDona = Math.min(this.canvas.width / 2, this.canvas.height / 2);
                var labelX = this.canvas.width / 2 + (radioDona / 2) * Math.cos(angulo_inicio + angulo_porcion / 2);
                var labelY = this.canvas.height / 2 + (radioDona / 2) * Math.sin(angulo_inicio + angulo_porcion / 2);

                if (this.opciones.circuloCentro) {
                    var agujero = (radioDona * this.opciones.circuloCentro) / 2;
                    labelX = this.canvas.width / 2 + (agujero + radioDona / 2) * Math.cos(angulo_inicio + angulo_porcion / 2);
                    labelY = this.canvas.height / 2 + (agujero + radioDona / 2) * Math.sin(angulo_inicio + angulo_porcion / 2);
                }

                var labelTexto = Math.round(100 * val / total_value);
                this.contexto.fillStyle = "#000";
                this.contexto.font = "bold 20px Calibri";
                this.contexto.fillText(labelTexto + "%", labelX, labelY);
                angulo_inicio += angulo_porcion;
            }

            dibujarPieza(
                this.contexto,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.opciones.circuloCentro * Math.min(this.canvas.width / 2, this.canvas.height / 2),
                0,
                2 * Math.PI,
                "#FFF"
            );
        }
    }
}

var graficoDona = new graficoDona(

    {
        canvas: grafico2,
        data: arreglo,
        colors: ["#FFD740", "#FF3D00"],
        circuloCentro: 0.001
    }
);

graficoDona.draw();

},false);
document.getElementById("grap3").addEventListener('click', function(){
    var grafico3 = document.getElementById("grafico3");
    grafico3.style.visibility='visible';
    grafico.style.visibility='hidden';
    grafico2.style.visibility='hidden';
grafico3.width = 150;
grafico3.height = 150;

var contexto = grafico3.getContext("2d");

function dibujarPieza(contexto, centroX, centroY, radio, anguloInicio, anguloFin, color) {
    contexto.fillStyle = color;
    contexto.beginPath();
    contexto.moveTo(centroX, centroY);
    contexto.arc(centroX, centroY, radio, anguloInicio, anguloFin);
    contexto.closePath();
    contexto.fill();
}

var arreglo = {
    "Ingresos": 70,
    "Gastos": 25
};

var graficoDona = function (opciones) {
    this.opciones = opciones;
    this.canvas = opciones.canvas;
    this.contexto = this.canvas.getContext("2d");
    this.colors = opciones.colors;

    this.draw = function () {
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.opciones.data) {
            var val = this.opciones.data[categ];
            total_value += val;
        }

        var angulo_inicio = 0;
        for (categ in this.opciones.data) {
            val = this.opciones.data[categ];
            var angulo_porcion = 2 * Math.PI * val / total_value;

            dibujarPieza(
                this.contexto,
                this.canvas.width / 2,
                this.canvas.height / 2,
                Math.min(this.canvas.width / 2, this.canvas.height / 2),
                angulo_inicio,
                angulo_inicio + angulo_porcion,
                this.colors[color_index % this.colors.length]
            );

            angulo_inicio += angulo_porcion;
            color_index++;
        }
        if (this.opciones.circuloCentro) {
            angulo_inicio = 0;
            for (categ in this.opciones.data) {
                val = this.opciones.data[categ];
                angulo_porcion = 2 * Math.PI * val / total_value;
                var radioDona = Math.min(this.canvas.width / 2, this.canvas.height / 2);
                var labelX = this.canvas.width / 2 + (radioDona / 2) * Math.cos(angulo_inicio + angulo_porcion / 2);
                var labelY = this.canvas.height / 2 + (radioDona / 2) * Math.sin(angulo_inicio + angulo_porcion / 2);

                if (this.opciones.circuloCentro) {
                    var agujero = (radioDona * this.opciones.circuloCentro) / 2;
                    labelX = this.canvas.width / 2 + (agujero + radioDona / 2) * Math.cos(angulo_inicio + angulo_porcion / 2);
                    labelY = this.canvas.height / 2 + (agujero + radioDona / 2) * Math.sin(angulo_inicio + angulo_porcion / 2);
                }

                var labelTexto = Math.round(100 * val / total_value);
                this.contexto.fillStyle = "#000";
                this.contexto.font = "bold 20px Calibri";
                this.contexto.fillText(labelTexto + "%", labelX, labelY);
                angulo_inicio += angulo_porcion;
            }

            dibujarPieza(
                this.contexto,
                this.canvas.width / 2,
                this.canvas.height / 2,
                this.opciones.circuloCentro * Math.min(this.canvas.width / 2, this.canvas.height / 2),
                0,
                2 * Math.PI,
                "#FFF"
            );
        }
    }
}

var graficoDona = new graficoDona(

    {
        canvas: grafico3,
        data: arreglo,
        colors: ["#448AFF", "#A7FFEB"],
        circuloCentro: 0.001
    }
);

graficoDona.draw();

},false);

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

