var contentDiv = document.getElementById("content");

function loadDataFromCurrentUrl() {
    var currentUrl = location.hash || "#home";

    goToUrl(currentUrl);
}

function goToUrl(url) {
    var htmlName = url.substring(1, url.length)

    getHtml(htmlName, function (htmlData) {
        contentDiv.innerHTML = htmlData.innerHTML;
        setBrowserLocation(htmlName);
    });
}

function setBrowserLocation(path) {
    location = "#" + path;
}

navigation = {
    loadDataFromCurrentUrl: loadDataFromCurrentUrl,
    goToUrl: goToUrl
};