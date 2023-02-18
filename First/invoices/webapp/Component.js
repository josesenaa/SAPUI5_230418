sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/invoices/model/models',
    'sap/ui/model/resource/ResourceModel'

], function(UIComponent, models, ResourceModel) {
    'use strict';

    return UIComponent.extend("logaligroup.invoices.Component", {

        metadata : {
            // "rootView" : {
            //     "viewName" : "logaligroup.invoices.view.Main",
            //     "type" : "XML",
            //     "async" : true,
            //     "id" : "main"
            // }
            manifest: "json"
        },

        init: function () {
            UIComponent.prototype.init.apply(this, arguments);

            this.setModel(models.CreateRecipient());

            var i18nModel = new ResourceModel({ bundleName: "logaligroup.invoices.i18n.i18n"});
            this.setModel(i18nModel, "i18n");
        }
    });

});