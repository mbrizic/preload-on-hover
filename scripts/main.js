navigation.loadDataFromCurrentUrl();

preloader.turnOn();

window.addEventListener("hashchange", function () {
    navigation.goToUrl(location.hash);
});