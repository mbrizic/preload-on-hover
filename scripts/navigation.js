var navigation = (function () {
    var contentDiv = null;
    var opts = options.defaults;

    function setup(opt) {
        options.set(opt);

        contentDiv = document.getElementById(options.get.mainContentElementId);
        _loadDataFromCurrentUrl();

        window.addEventListener("hashchange", function () {
            navigation.goToUrl(location.hash);
        });

        if(options.get.enablePreloader){
            preloader.setup();
        }
    }

    function goToUrl(url) {
        var htmlName = url.substring(1, url.length)

        if(templateCache.exists(htmlName)){
            _setHtmlPage(htmlName, templateCache.get(htmlName))
            return;
        }

        ajax.fetchHtmlPage(htmlName, function (htmlTemplate) {
            _setHtmlPage(htmlName, htmlTemplate)
        });
    }

    function _setHtmlPage(htmlName, htmlTemplate) {
        contentDiv.innerHTML = htmlTemplate.innerHTML;
        location = "#" + htmlName;
    }

    function _loadDataFromCurrentUrl() {
        var currentUrl = location.hash || options.get.homeRoute;

        goToUrl(currentUrl);
    }

    return {
        setup: setup,
        goToUrl: goToUrl,
    };
})(); 