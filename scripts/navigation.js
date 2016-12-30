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

function setup() {
    window.addEventListener("hashchange", function () {
        navigation.goToUrl(location.hash);
    });
}

function _setHtmlPage(htmlName, htmlTemplate) {
    contentDiv.innerHTML = htmlTemplate.innerHTML;
    location = "#" + htmlName;
}

window.navigation = {
    setup: setup,
    loadDataFromCurrentUrl: loadDataFromCurrentUrl,
    goToUrl: goToUrl
};