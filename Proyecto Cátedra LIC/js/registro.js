//VARIABLES
//VARIABLE CONTADOR
var contador = 0;

//VARIABLES PARA GUARDAR DATOS
var arraynombre = new Array();
var arrayapellido = new Array();
var arraycorreo = new Array();
var arrayclave = new Array();
var arraydireccion = new Array();
var arraydepartamento = new Array();
var arraymunicipio = new Array();
var arraycolonia = new Array();
var arraycalle = new Array();
var arraycasa = new Array();
var arraypreguntas = new Array();
var arrayDUI = new Array();
var arrayNIT = new Array();
var arraycel = new Array();
var arrayfecha = new Array();
var random = 0;
var id = 0;

//FUNCIÓN INICIAR
function iniciar() {
    //INSTANCIA DEL OBJETO
    var Registro = new wallet();
    document.getElementById("enviar").addEventListener("click", function () {
        var bandera = true;
        var respuesta = "";
        //OBTENCIÓN DE VALORES INTRODUCIDOS
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


        //EXPRESIONES REGULARES

        var rgxnombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        var rgxapellido = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
        var rgxcorreo = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;
        var rgxclave = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;
        var rgxdui = /^\d{8}\-\d{1}$/;
        var rgxnit = /^\d{4}\-\d{6}\-\d{3}\-\d{1}$/;
        var rgxcel = /^[67]{1}\d{3}-\d{4}$/;


        //VALIDACIÓN DE EXPRESIONES REGULARES

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
        if (!rgxnombre.test(p1)) {
            bandera = false;
            respuesta = "pregunta de seguridad 1";
        }
        if (!rgxnombre.test(p2)) {
            bandera = false;
            respuesta = "pregunta de seguridad 2";
        }
        if (!rgxnombre.test(p3)) {
            bandera = false;
            respuesta = "pregunta de seguridad 3";
        }
        if (!rgxnombre.test(p4)) {
            bandera = false;
            respuesta = "pregunta de seguridad 4";
        }
        if (!rgxapellido.test(p5)) {
            bandera = false;
            respuesta = "pregunta de seguridad 5";
        }
        if (!rgxdui.test(DUI)) {
            bandera = false;
            respuesta = "DUI";
        }
        if (!rgxnit.test(NIT)) {
            bandera = false;
            respuesta = "NIT";
        }
        if (!rgxcel.test(celular)) {
            bandera = false;
            respuesta = "número de celular";
        }
        if (fecha_nacimiento.length = 0) {
            bandera = false;
            respuesta = "fecha de nacimiento";
        }
        //DATOS INCORRECTOS
        if (!bandera) {
            alert("Revise el dato: " + respuesta);
            //DATOS CORRECTOS
        } else {
            //VERIFICAR SI CORREO ELECTRÓNICO EXISTE
            for (i = 0; i <= contador - 1; i++) {
                if (email == arraycorreo[i]) {
                    alert("Correo electrónico ya registrado");
                    i = contador - 1;
                    bandera = false;
                } else {
                    bandera = true;
                }
            }
            if (bandera == true) {
                //AGREGAR USUARIOS
                AgregarUsuarios(nombre, apellido, email, contra, direccion, departamento, municipio, colonia, calle, casa, p1, p2, p3, p4, p5, DUI, NIT, celular, fecha_nacimiento);


                contador += 1;
                //MOSTRAR MÉTODO DE OBJETO
                Registro.Mostrar();
                var j = 0;

            }
            //LOGIN
            document.getElementById("logeo").addEventListener("click", function () {
                //MÉTODO DE INICIAR SESIÓN DEL OBJETO
                Registro.IniciarSesion(document.login.Usuario.value, document.login.Contraseña.value);
            }, false);



        }
        //EVENTO CLICK RECUPERAR CONTRASEÑA
    }, false);
    document.getElementById("recu").addEventListener("click", function () {

        recuperar(); //FUNCIÓN VALIDAR CORREO DE RECUPERACIÓN
    }, false);
    //EVENTO CLICK RECUPERAR CONTRASEÑA BIEN
    document.getElementById("recu_pg").addEventListener("click", function () {

        recuperar_clave(); //FUNCIÓN RECUPERAR CLAVE
    }, false);


};

//OBJETO WALLET
function wallet() {
    //MÉTODO MOSTRAR
    this.Mostrar = function () {
        alert("Usuario registrado con éxito");
        limpiar();
    }
    //MÉTODO INICIAR SESIÓN
    this.IniciarSesion = function (usuario, clave) {
        for (i = 0; i <= contador - 1; i++) {

            if (usuario == arraycorreo[i]) {
                if (clave == arrayclave[i]) {
                    this.continuar = true;
                    i = contador - 1;
                    //continue;
                } else {
                    this.continuar = false;
                }
            } else {
                this.continuar = false;
            }
        }
        if (this.continuar) {
            alert("Ha iniciado sesión");
        } else {
            alert("Error! Revise correo o contraseña");
        }
    }


}
//FUNCIÓN RECUPERAR EMAIL RECUPERACIÓN
function recuperar() {
    var correo_indice = 0;
    var existe = false;
    var r_correo = document.recu.correorecu.value;
    if (r_correo != "") {
        if (contador > 0) {
            for (i = 0; i <= contador - 1; i++) {
                if (r_correo == arraycorreo[i]) {
                    correo_indice = i;
                    id = i;
                    i = contador - 1;
                    existe = true;
                } else {
                    existe = false;
                }
            }
        }
        if (existe) {
            //MOSTRAR POPUP DE CLAVE
            this.document.location.href = ("#popup2");

            var arrayindice = new Array(0, 1, 2, 3, 4);
            var arrayrandom = new Array("¿Nombre de tu primera mascota?", "¿Cómo se llama el primer colegio al cual asististe?", "¿Nombre de tu mamá?", "¿Nombre de tu mejor amigo?", "¿Primera calle en la cual viviste?");
            random = Math.floor((Math.random() * 5) + 0);
            document.getElementById("question").innerHTML = arrayrandom[random];

        }
    }
};
//FUNCIÓN RECUPERAR CLAVE
function recuperar_clave() {
    var pregunta = document.recup.pg1.value;
    if (pregunta == arraypreguntas[(id * 5) + random]) {
        alert("Pregunta de seguridad correcta");
        alert("Su contraseña es: " + arrayclave[id]);
        history.back(3);
    }





};
//FUNCIÓN LIMPIAR
function limpiar() {
    nombre = "";
    apellido = "";
    email = "";
    contra = "";
    direccion = "";
    departamento = "";
    municipio = "";
    colonia = "";
    calle = "";
    casa = "";
    p1 = "";
    p2 = "";
    p3 = "";
    p4 = "";
    p5 = "";
    DUI = "";
    NIT = "";
    celular = "";
    fecha_nacimiento = "";

}
//FUNCIÓN AGREGAR USUARIOS 
function AgregarUsuarios(nombre, apellido, correo, clave, dir, dep, mun, col, calle, casa, pt1, pt2, pt3, pt4, pt5, dui, nit, celu, fechanac) {
    var valornombre = nombre;
    var valorapellido = apellido;
    var valorcorreo = correo;
    var valorclave = clave;
    var valordireccion = dir;
    var valordepartamento = dep;
    var valormunicipio = mun;
    var valorcolonia = col;
    var valorcalle = calle;
    var valorcasa = casa;
    var valorp1 = pt1;
    var valorp2 = pt2;
    var valorp3 = pt3;
    var valorp4 = pt4;
    var valorp5 = pt5;
    var valordui = dui;
    var valornit = nit;
    var valorcelu = celu;
    var valorfecha = fechanac;

    //AGREGAR DATOS A LOS ARREGLOS
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

//VERIFICAR SI PÁGINA ESTÁ CARGADA
if (window.addEventListener) {
    window.addEventListener("load", iniciar, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", iniciar);
}
