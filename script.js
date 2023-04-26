const links = document.querySelectorAll('.opcion');
const contenido = document.querySelectorAll('.item');

links.forEach((link, index) => {
  link.addEventListener('click', () => {
    // Remover la clase "activa" de todas las pestañas y contenidos
    contenido.forEach((contenido) => contenido.classList.remove('p-active'));

    // Agregar la clase "activa" solo a la pestaña y contenido seleccionado
    contenido[index].classList.add('p-active');
  });
});

function mostrarDesc(tec) {
    const tooltip = document.getElementById('tooltip');

    tooltip.style.animation= 'desvanecer 0.3s';

    tooltip.style.display = 'block';
    tooltip.style.opacity = 1;

    switch (tec) {
        case "java":
            tooltip.innerHTML = "Conocimientos en creacion, importacion y exportacion de proyectos.\nUso de clases, funciones, metodos y variables con conocimientos en Programacion Orientada a Objetos.\nFamiliarizado con conceptos de MVC, JDBC y REST.\nConocimientos básicos de JVM.";
            break;
        case "php":
            tooltip.innerHTML = "Conocimientos en creacion, importacion y exportacion de proyectos.\nUso de clases, funciones, metodos y variables con conocimientos en Programacion Orientada a Objetos.\nConocimientos en conceptos de seguridad. Uso de bloques de codigo y conexiones a MySQL.";
            break;
        case "csharp":
            tooltip.innerHTML = "Conocimientos en creacion, importacion y exportacion de proyectos de escritorio. Ademas de estar relacionado con el uso de Formularios de Windows.\nConocimientos en conexion a base de datos con MySQL. \nUso de sentencias y bloques de codigo.";
            break;
        case "python":
            tooltip.innerHTML = "Conocimientos básicos en el lenguaje.\nCreacion de proyectos simples con introduccion de codigo por medio de consola.\nUso de librerias como numpy o pandas para mineria de datos en forma de practica.\nConocimientos basicos acerca del funcionamiento general.";
            break;
        case "git":
            tooltip.innerHTML = "Uso de comandos basicos para trabajo con repositorios.\nExperiencia con uso de Github como administrador de repositorios.\nConocimientos generales en terminos usados para Git.\nConocimiento superficial de GitLab y Github Pages para desplegar paginas web.";
            break;
        case "html":
            tooltip.innerHTML = "Conocimientos avanzados en lenguaje de etiquetas para paginas web.\n Familiarizado con conceptos generales de diseño y arquitectura web.\n";
            break;
        case "css":
            tooltip.innerHTML = "Conocimientos avanzados en el uso de hojas de estilo en cascada.\nUso de selectores y pseudoselectores.\nConocimientos intermedios acerca de animaciones y clases en una pagina web.";
            break;
        case "js":
            tooltip.innerHTML = "Conocimientos generales en lenguaje de programacion y logica.\n Uso de bloques de codigo y sentencias.\n Uso y conocimiento de eventos, elementos y atributos dentro del DOM.\n Experiencia con Node JS para levantar un servidor por medio de Express.";
            break;
        case "mysql":
            tooltip.innerHTML = "Conocimientos en creacion de base de datos relacionales.\nUso de diagramas de entidad-realacion y modelos relacionales de base de datos.\nFamiliarizado con el uso de funciones y procesos almacenados. Capaz de realizar consultas avanzadas. Conocimientos basicos en motores de base de datos.";
            break;
        default:
            tooltip.innerHTML = "No deberias poder ver esto, pero bien por ti si lo ves.";
            break;
    }

}
function ocultarDesc() {
    const tooltip = document.getElementById('tooltip');

    tooltip.style.opacity = 0;

    tooltip.style.display = "none";

}

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    content.classList.toggle("show");
}

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        smoothScroll(content);
    }
}

function smoothScroll(element) {
    window.scrollTo({
        top: element.offsetTop + 50,
        behavior: "smooth"
    });
}
