document.addEventListener('DOMContentLoaded', function() {

    var yeartext = document.getElementById("yearText");

    yeartext.innerHTML = new Date().getFullYear();
} )