var ajax = (function () {
    function fetchHtmlPage(url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            if(xhr.status === 200){
                callback(xhr.responseXML.body);
            }        
        });

        xhr.open('GET', options.get.partialsFolder + "/" + url + ".html");
        xhr.responseType = "document";
        xhr.send();
    }

    return {
    	fetchHtmlPage: fetchHtmlPage
    };
})(); 