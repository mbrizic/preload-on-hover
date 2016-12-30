var links = document.getElementsByTagName('a');

function setupMouseoverEvents(){
    for (var i = 0; i < links.length; i++) {
        links[i].onmouseover = _onMouseOver;
    }    
}

function _onMouseOver(event) {
    var url = event.target.hash;
    _preloadHtmlPage(url);
}

function _preloadHtmlPage(url){
    var htmlName = url.substring(1, url.length)

    if(templateCache.exists(htmlName))
        return;

    getHtml(htmlName, function (htmlTemplate) {
        templateCache.add(htmlName, htmlTemplate);
    });
}

var preloader = {
    turnOn: setupMouseoverEvents
}