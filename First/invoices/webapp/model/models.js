sap.ui.define([
    'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    'use strict';

    return {
        CreateRecipient: function () {
            var oData = {
                recipient: {
                    name: "World"
                }
            };

            return new JSONModel(oData);

        }
    };

});