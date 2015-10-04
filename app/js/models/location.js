(function () {

    // Location model
    App.Models.Location = new Backbone.Model.extend({

        urlRoot: SERVER_URL + 'locations',

        defaults: {
            _id: null,
            name: '',
            address: '',
            comment: '',
            phone: '',
            photos: '',
            status: 'new',
            type: '',
            latitude: '',
            longitude: ''
        }

    });

})();

