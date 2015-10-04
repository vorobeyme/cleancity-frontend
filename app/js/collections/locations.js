(function () {

    // Location collection (A list of locations)
    App.Collections.Locations = new Backbone.Collection.extend({

        model: App.Models.Location,
        url: SERVER_URL + 'locations'

    });

})();

