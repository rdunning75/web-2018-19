// Render the PayPal button
paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {
            layout: 'horizontal',  // horizontal | vertical
            // fundingicons: 'true',
            size: 'medium',
            tagline: 'false',
            shape: 'pill',      // pill | rect
            color: 'gold'     // gold | blue | silver | black
            // medium | large | responsive
        },

        // Specify allowed and disallowed funding sources
        //
        // Options:
        // - paypal.FUNDING.CARD
        // - paypal.FUNDING.CREDIT
        // - paypal.FUNDING.ELV

        funding: {
            allowed: [paypal.FUNDING.CARD, paypal.FUNDING.CREDIT],
            disallowed: []
        },

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox: 'AQ5nOSV3rVY4hPZefnux5ncLlwgVKi9xhCEH1zfBRdGMeyfQ36d38BlAkHVHS8axqwXnjSlmG0u5hiU1',
            production: '<insert production client id>'
        },

        payment: function (data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: {total: '5.00', currency: 'USD'}
                        }
                    ]
                }
            });
        },


        onAuthorize: function (data, actions) {
            return actions.payment.execute().then(function () {
                window.alert('Payment Complete!');
            });
        },

        onCancel: function (data, actions) {
            return actions.redirect();
        },

        onError: function (error) {
            // You will want to handle this differently
            return alert(error);
        },

        commit: 'true'

    }, '#dollar5'


);


paypal.Button.render({

        // Set your environment

        env: 'sandbox', // sandbox | production

        // Specify the style of the button

        style: {
            layout: 'horizontal',  // horizontal | vertical
            // fundingicons: 'true',
            size: 'medium',
            tagline: 'false',
            shape: 'pill',      // pill | rect
            color: 'gold'     // gold | blue | silver | black
            // medium | large | responsive
        },

        // Specify allowed and disallowed funding sources
        //
        // Options:
        // - paypal.FUNDING.CARD
        // - paypal.FUNDING.CREDIT
        // - paypal.FUNDING.ELV

        funding: {
            allowed: [paypal.FUNDING.CARD, paypal.FUNDING.CREDIT],
            disallowed: []
        },

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        client: {
            sandbox: 'AQ5nOSV3rVY4hPZefnux5ncLlwgVKi9xhCEH1zfBRdGMeyfQ36d38BlAkHVHS8axqwXnjSlmG0u5hiU1',
            production: '<insert production client id>'
        },

        payment: function (data, actions) {
            return actions.payment.create({
                payment: {
                    transactions: [
                        {
                            amount: {total: '10.00', currency: 'USD'}
                        }
                    ]
                }
            });
        },


        onAuthorize: function (data, actions) {
            return actions.payment.execute().then(function () {
                window.alert('Payment Complete!');
            });
        },

        onCancel: function (data, actions) {
            return actions.redirect();
        },

        onError: function (error) {
            // You will want to handle this differently
            return alert(error);
        },

        commit: 'true'

    }, '#dollar10'


);




