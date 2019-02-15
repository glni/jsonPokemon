// API: https://pokemontcg.io/
// URL: https://api.pokemontcg.io/v1/cards?name=ditto
$(document).ready(function(){

    const section = $("section#pokemonWrapper");
    const searchForm = $(".searchForm");

    searchForm.submit(function (e) {
        e.preventDefault();
    });

}); /*document ready END*/