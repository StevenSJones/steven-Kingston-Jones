$(document).ready(function(){
    // constructing a queryURL variable I will use instead of the literal string inside of the ajax method
let searchOMDB = function(movieTitle){
    const ajaxOptions = {
        queryURL: "http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=short&apikey=6fe2f8b3",
        method: "GET",
    };
    $.ajax(ajaxOptions).then(function(response) {
        console.log(response)
    })
};

searchOMDB("Home Alone");
searchOMDB("The Book of Life");
searchOMDB("How the Grinch Stole Christmas");

});