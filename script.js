$(document).ready(function(){
    // constructing a queryURL variable I will use instead of the literal string inside of the ajax method
let searchOMDB = function(movieTitle){
    const ajaxOptions = {
        url: "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=6fe2f8b3",
        method: "GET",
        dataType: "json" 
    };

    $.ajax(ajaxOptions).then(function(response) {
        console.log(response);
        $("<div>").text(response.Title).appendTo(document.body);
        $("<div>").text(response.Year).appendTo(document.body);
        $("<div>").text(response.Actors).appendTo(document.body);
        $("<div>").text(response.Plot).appendTo(document.body);
        $("<div>").text(response.Released).appendTo(document.body);
    })
};

searchOMDB("Home Alone");
searchOMDB("The Book of Life");
searchOMDB("How the Grinch Stole Christmas");

});