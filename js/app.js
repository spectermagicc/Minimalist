$(document).ready(function () {
    var inicio = $('#inicio').offset().top,
        banda = $('#laBanda').offset().top,
        fechas = $('#gira').offset().top,
        contacto = $('#contacto').offset().top;

    $('#btn-inicio').on('click', function () {
        $('html, body').animate({
            'scrollTop': inicio
        }, 2000)
    });

    $('#btn-banda').on('click', function () {
        $('html, body').animate({
            'scrollTop': banda
        }, 2000)
    });

    $('#btn-fechas').on('click', function () {
        $('html, body').animate({
            'scrollTop': fechas
        }, 2000)
    });

    $('#btn-contacto').on('click', function () {
        $('html, body').animate({
            'scrollTop': contacto
        }, 2000)
    });
 
});