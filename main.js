function getData(cb) {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://swapi.co/api/");
    xhr.send();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText)); //callback
        }
    };
}

getData(function(data) { //function called with a data var that is the callback as a parameter!! 
    console.log(data);
});

//------------------------------------------------------------------------------------------------

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);