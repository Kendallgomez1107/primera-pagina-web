
document.querySelector('.menubtn').addEventListener('click', () =>{
 document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.infodepedio',{ delay:600});

ScrollReveal().reveal('.baner',{ delay:600});
ScrollReveal().reveal('.mapa',{ delay:600});


//ejecuntando funciones //
document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("cover-ctn-search").addEventListener("click", quitar_buscador);

//buscador de contenido//
//variable//
bars_search =       document.getElementById("ctn-bars-search");
cover_ctn_search =  document.getElementById("cover-ctn-search");
inputSearch =       document.getElementById("inputSearch");
box_search =        document.getElementById("box-search");

//funcion para mostrael buscadopr//

function mostrar_buscador(){
    bars_search.style.top="80px";
    cover_ctn_search.style.display="block";
    inputSearch.focus();
}

function quitar_buscador()
{
    bars_search.style.top="-80px";
    cover_ctn_search.style.display="none";
    inputSearch.value="";
} 

