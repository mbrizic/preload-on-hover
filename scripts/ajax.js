function getHtml(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener("load", function () {
        if(xhr.status === 200){
            callback(xhr.responseXML.body);
        }        
    });

    xhr.open('GET', "partials/" + url + ".html");
    xhr.responseType = "document";
    xhr.send();
};

window.getHtml = getHtml;