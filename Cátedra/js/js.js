var ciclo1=["","Química General", "Introducción a la Programación", "Redes de Área Local", "Álgebra Lineal", "Humanística I", "Expresión Oral y Escrita", "Introducción a Internet"];
var notas=[];
var sumaUV=0;
var suma=0;
var div=0;
var UV1=["",4,4,4,3,3,3,4];
var ciclo3=["","Matemática I", "Mantenimiento de Computadoras", "Lenguajes de Programación I", "Lenguajes Interpretados en el Cliente", "Matemática Discreta"];
var UV2=["",4,4,4,4,3];


do{
var opc=Number(prompt("Elija el Ciclo de la Universidad(1,2,3)"));
    }while(opc<1 || opc>3);
switch(opc){
    case 1:
           for(var i=1;i<8;i++){
            notas[i]=Number(prompt("Ingrese la nota de: "+ciclo1[i]));
               document.write("<tr><td>"+ciclo1[i]+"</td><td>"+UV1[i]+"</td><td>"+notas[i]+"</td></tr>");
               sumaUV+=UV1[i];
                
           }
           for(i=1;i<8;i++){
             suma=(suma+notas[i]*UV1[i]);
         }
            div=suma/sumaUV;
            document.write("<tr><td>CUM:</td><td>"+div+"</td></tr>");
        break;
    case 2:
           var notas=Number(prompt("Ingrese la nota de Humanística II"));
        document.write("<tr><td>Humanística II</td><td>3</td><td>"+notas+"</td></tr>");
            suma=(suma+notas*3);
            div=suma/3;
         document.write("<tr><td>CUM:</td><td>"+div+"</td></tr>");
        break;
    case 3:
            for(var i=1;i<6;i++){
            notas[i]=Number(prompt("Ingrese la nota de: "+ciclo3[i]));
                document.write("<tr><td>"+ciclo3[i]+"</td><td>"+UV2[i]+"</td><td>"+notas[i]+"</td></tr>");
                sumaUV+=UV2[i];
           }
        
            for(i=1;i<6;i++){
             suma=(suma+notas[i]*UV2[i]);
         }
            div=suma/sumaUV;
            document.write("<tr><td>CUM:</td><td>"+div+"</td></tr>");
        
        break;
    default:
           alert("¡ERROR! | ¡OPCIÓN NO VÁLIDA!")
        break;
          }

 //Desarrolladores: 
 //Nolasco Umanzor, Ronald Alexander #10
 //Ramírez Juárez, Sergio Norberto #16
  
  //Trabajo LIC - 2017

