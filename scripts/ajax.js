function getHtml(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(xhr.readyState === XMLHttpRequest.DONE){
            callback(xhr.responseXML.body);
        }        
    };

    xhr.open('GET', "partials/" + url + ".html");
    xhr.responseType = "document";
    xhr.send();
};


window.getHtml = getHtml;