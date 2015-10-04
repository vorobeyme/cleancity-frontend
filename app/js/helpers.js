// Helpers

(function () {

    // Template loader
    window.template = function (id) {
        return _.template($('#' + id).html());
    };

})();

