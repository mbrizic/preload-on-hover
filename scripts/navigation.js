var contentDiv = document.getElementById("content");

function loadDataFromCurrentUrl() {
    var currentUrl = location.hash || "#home";

    goToUrl(currentUrl);
}

function goToUrl(url) {
    var htmlName = url.substring(1, url.length)

    if(templateCache.exists(htmlName)){
        _setHtmlPage(htmlName, templateCache.get(htmlName))
        return;
    }

    getHtml(htmlName, function (htmlTemplate) {
        _setHtmlPage(htmlName, htmlTemplate)
    });
}

function _setHtmlPage(htmlName, htmlTemplate) {
    contentDiv.innerHTML = htmlTemplate.innerHTML;
    location = "#" + path;
}

var navigation = {
    loadDataFromCurrentUrl: loadDataFromCurrentUrl,
    goToUrl: goToUrl
};