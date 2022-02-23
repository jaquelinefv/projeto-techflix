$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

//Botões das páginas

//Botão index.html

//Redireciona para a página e resumo

//Informações 
function maisInformacoes(){
    window.location.href = "informacoes.html"
}


//Botão eventos.html 
function maisEventos(){
    window.location.href = "https://www.showmetech.com.br/calendario-tech-feiras-e-eventos-do-ano/"
}

function assistir(){
    window.location.href = "assistir.html"
}


//Botão cursos.html/eventos.html/filmes.html
//Redireciona para a página inicial
function paginaInicial(){
    window.location.href = "index.html"
}






