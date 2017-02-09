var options = (function () {
    var defaults = {
        homeRoute: "#home",
        partialsFolder: "partials",
        mainContentElementId: "content",
        enablePreloader: false,
    };

    var options = defaults;

    function set(opts) {
        if(!opts) return;

        _setIfSpecified("homeRoute", opts.homeRoute);
        _setIfSpecified("partialsFolder", opts.partialsFolder);
        _setIfSpecified("mainContentElementId", opts.mainContentElementId);
        _setIfSpecified("enablePreloader", opts.enablePreloader);
    }

    function _setIfSpecified(name, value) {
        if(value){
            options[name] = value;
        }
    }

    return {
        defaults: defaults,
        set: set,
        get: options
    }
})(); 