navigation.loadDataFromCurrentUrl();

window.addEventListener("hashchange", function () {
    navigation.goToUrl(location.hash);
});