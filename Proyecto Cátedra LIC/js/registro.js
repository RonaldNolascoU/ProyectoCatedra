var contador = 0;
var arraynombre = new Array();
var arrayapellido = new Array();
var arraycorreo = new Array();
var arrayclave = new Array();
var arraydireccion = new Array();
var arraydepartamento = new Array();
var arraymunicipio = new Array();
var arraycolonia = new Array();
var arraycalle = new Array();
var arraycasa=new Array();
var arraypreguntas=new Array();
var arrayDUI=new Array();
var arrayNIT=new Array();
var arraycel=new Array();
var arrayfecha=new Array();
var random=0;
var id=0;

function iniciar() {
    var Registro = new wallet();
    document.getElementById("enviar").addEventListener("click", function () {
var bandera = true;
var respuesta = "";

        var nombre = document.registro.nombre.value;
        var apellido = document.registro.apellido.value;
        var email = document.registro.correo.value;
        var contra = document.registro.contra.value;
        var direccion = document.registro.direccion.value;
        var departamento = document.registro.departamento.value;
        var municipio = document.registro.municipio.value;
        var colonia = document.registro.colonia.value;
        var calle = document.registro.calle.value;
        var casa = document.registro.casa.value;
        var p1 = document.registro.p1.value;
        var p2 = document.registro.p2.value;
        var p3 = document.registro.p3.value;
        var p4 = document.registro.p4.value;
        var p5 = document.registro.p5.value;
        var DUI = document.registro.DUI.value;
        var NIT = document.registro.NIT.value;
        var celular = document.registro.celular.value;
        var fecha_nacimiento = document.registro.fechanacimiento.value;
    

        

        var rgxnombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        var rgxapellido = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        var rgxcorreo = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        var rgxclave = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
var rgxdui=/^\d{8}\-\d{1}$/;
        var rgxnit=/^\d{4}\-\d{6}\-\d{3}\-\d{1}$/;
        var rgxcel=/^[67]{1}\d{3}-\d{4}$/;




        if (!rgxnombre.test(nombre)) {
            bandera = false;
            respuesta = "nombre";
        }
        if (!rgxapellido.test(apellido)) {
            bandera = false;
            respuesta = "apellido";
        }
        if (!rgxcorreo.test(email)) {
            bandera = false;
            respuesta = "correo electrónico";
        }
        if (!rgxclave.test(contra)) {
            bandera = false;
            respuesta = "contraseña";
        }
        if (!rgxnombre.test(direccion)) {
            bandera = false;
            respuesta = "dirección";
        }
        if (!rgxnombre.test(departamento)) {
            bandera = false;
            respuesta = "departamento";
        }
        if (!rgxnombre.test(municipio)) {
            bandera = false;
            respuesta = "municipio";
        }
        if (!rgxnombre.test(colonia)) {
            bandera = false;
            respuesta = "colonia";
        }
        if (!rgxnombre.test(calle)) {
            bandera = false;
            respuesta = "calle";
        }
        if (!rgxnombre.test(casa)) {
            bandera = false;
            respuesta = "casa";
        }
        if(!rgxnombre.test(p1)){
            bandera = false;
            respuesta = "pregunta de seguridad 1";
        }
         if(!rgxnombre.test(p2)){
            bandera = false;
               respuesta = "pregunta de seguridad 2";
        }
         if(!rgxnombre.test(p3)){
            bandera = false;
                 respuesta = "pregunta de seguridad 3";
        }
         if(!rgxnombre.test(p4)){
            bandera = false;
                 respuesta = "pregunta de seguridad 4";
        }
         if(!rgxapellido.test(p5)){
            bandera = false;
                 respuesta = "pregunta de seguridad 5";
        }
         if(!rgxdui.test(DUI)){
            bandera = false;
                 respuesta = "DUI";
        }
         if(!rgxnit.test(NIT)){
            bandera = false;
            respuesta = "NIT";
        }
         if(!rgxcel.test(celular)){
            bandera = false;
            respuesta = "número de celular";
        }
         if(fecha_nacimiento.length=0){
            bandera = false;
            respuesta = "fecha de nacimiento";
        }

        if (!bandera) {
            alert("Revise el dato: " + respuesta);

        } else {
            for(i=0;i<=contador-1;i++){
                if(email==arraycorreo[i]){
                    alert("Correo electrónico ya registrado");
                    i=contador-1;
                    bandera=false;
                }else{
                    bandera=true;
                }
            }
            if(bandera==true){
                AgregarUsuarios(nombre, apellido, email, contra, direccion, departamento, municipio, colonia, calle, casa, p1, p2, p3, p4, p5, DUI, NIT, celular, fecha_nacimiento);
            

            contador += 1;
            Registro.Mostrar();
            var j=0;
//            for (i = 0; i <= contador - 1; i++) {
//                document.getElementById("A").innerHTML = "Datos del usuario " + (i + 1) + ":" + arraynombre[i] + ", " + arrayapellido[i] + ", " + arraycorreo[i] + ", " + arrayclave[i] + ", " + arraydireccion[i] + ", " + arraydepartamento[i] + ", " + arraymunicipio[i] + ", " + arraycolonia[i] + ", " + arraycalle[i]+","+arraycasa[i]+","+arraypreguntas[j]+","+arraypreguntas[j+1]+","+arraypreguntas[j+2]+","+arraypreguntas[j+3]+","+arraypreguntas[j+4]+","+arrayDUI[i]+","+arrayNIT[i]+","+arraycel[i]+","+arrayfecha[i];
//                j+=4;
//            }
            }

            // alert(i+" Usuarios registrados actualmente");


            document.getElementById("logeo").addEventListener("click", function () {
                Registro.IniciarSesion(document.login.Usuario.value, document.login.Contraseña.value);
            }, false);



        }
        
    }, false);
    document.getElementById("recu").addEventListener("click", function(){
        
    recuperar();
    },false);
    
     document.getElementById("recu_pg").addEventListener("click", function(){
        
    recuperar_clave();
    },false);


};

function wallet() {
    this.nombres = [];
    this.apellidos = [];
    this.correos = [];
    this.claves = [];
    this.direcciones = [];
    this.departamentos = [];
    this.municipios = [];
    this.colonias = [];
    this.calles = [];

    this.Mostrar = function () {
        alert("Usuario registrado con éxito");
        limpiar();
    }
    this.IniciarSesion = function (usuario, clave) {
        for (i = 0; i <= contador - 1; i++) {
            
            if (usuario == arraycorreo[i]) {
                if (clave == arrayclave[i]) {
                    this.continuar=true;                  
                    i = contador - 1;
                    //continue;
                }else{
                    this.continuar=false;
                }
            } else{
                this.continuar=false;
            }
        }
        if(this.continuar){
            alert("Ha iniciado sesión");
        }else{
            alert("Error! Revise correo o contraseña");
        }
    }


}
function recuperar(){
    var correo_indice=0;
    var existe=false;
//    document.getElementById("Aceptarr").addEventListener("click", function(){
       var r_correo=document.recu.correorecu.value;
        if(r_correo!=""){
            if(contador>0){
            for(i=0;i<=contador-1;i++){
                if(r_correo==arraycorreo[i]){
                    correo_indice=i;
                    id=i;
                    i=contador-1;
                    existe=true;
                }else{
                    existe=false;
                }
            }
            }
        if(existe){
                 this.document.location.href=("#popup2");

    var arrayindice=new Array(0,1,2,3,4);
            var arrayrandom=new Array("Preguntas de Seguridad 1","Preguntas de Seguridad 2", "Preguntas de Seguridad 3","Preguntas de Seguridad 4","Preguntas de Seguridad 5");
            random=Math.floor((Math.random()*5)+0);
           document.getElementById("question").innerHTML=arrayrandom[random];
            
        }
// }, false);
//    
        }
};
function recuperar_clave(){
             var pregunta=document.recup.pg1.value;
                if(pregunta==arraypreguntas[(id*5)+random]){
                    alert("Pregunta de seguridad correcta");
                    alert("Su contraseña es: "+arrayclave[id]);
                   history.back(3);
                }
            
            
       
            
        
};

function limpiar() {
        nombre="";
    apellido="";
    email="";
    contra="";
    direccion="";
    departamento="";
    municipio="";
    colonia="";
    calle="";
    casa="";
    p1="";
    p2="";
    p3="";
    p4="";
    p5="";
    DUI="";
    NIT="";
    celular="";
    fecha_nacimiento="";

}

function AgregarUsuarios(nombre, apellido, correo, clave, dir, dep, mun, col, calle, casa,pt1, pt2, pt3, pt4, pt5, dui, nit, celu, fechanac) {
    var valornombre = nombre;
    var valorapellido = apellido;
    var valorcorreo = correo;
    var valorclave = clave;
    var valordireccion = dir;
    var valordepartamento = dep;
    var valormunicipio = mun;
    var valorcolonia = col;
    var valorcalle = calle;
    var valorcasa=casa;
    var valorp1=pt1;
    var valorp2=pt2;
    var valorp3=pt3;
    var valorp4=pt4;
    var valorp5=pt5;
    var valordui=dui;
    var valornit=nit;
    var valorcelu=celu;
    var valorfecha=fechanac;
    
    arraynombre.push(valornombre);
    arrayapellido.push(valorapellido);
    arraycorreo.push(valorcorreo);
    arrayclave.push(valorclave);
    arraydireccion.push(valordireccion);
    arraydepartamento.push(valordepartamento);
    arraymunicipio.push(valormunicipio);
    arraycolonia.push(valorcolonia);
    arraycalle.push(valorcalle);
    arraycasa.push(valorcasa);
   arraypreguntas.push(valorp1);
    arraypreguntas.push(valorp2);
    arraypreguntas.push(valorp3);
    arraypreguntas.push(valorp4);
    arraypreguntas.push(valorp5);
    arrayDUI.push(valordui);
    arrayNIT.push(valornit);
    arraycel.push(valorcelu);
    arrayfecha.push(valorfecha);
}

if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}
