var fadeOut, fondo, ancho, alto, url;
$(function(){
    ancho = $('#load').attr('data-ancho');
    alto = $('#load').attr('data-alto');
    url = 'url("'+$('#load').attr('data-url')+'") center center no-repeat';
    fondo = $('#preloader').attr('data-color-fondo');
    $('#preloader').css({ position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', background: fondo, zIndex: '10000' });
    $('#load').css({ width: ancho, height: alto, background: url, position: 'absolute', top: '50%', left: '50%', marginTop: -(ancho/2), marginLeft: -(alto/2) });           
});
$(window).on('load', function(){
    var fadeOut = parseInt($('#preloader').attr('data-fade-out'));
    $('#preloader').fadeOut(fadeOut); 
});