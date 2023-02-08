sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
    //  'logaligroup/invoices/model/models',
    //  'sap/ui/model/resource/ResourceModel'

],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller, MessageToast) {
        'use strict';
        return Controller.extend("logaligroup.invoices.Controller.Main", {
            onInit: function () {

                // this.getView().setModel(models.CreateRecipient());

                // var i18nModel = new ResourceModel({ bundleName : "logaligroup.invoices.i18n.i18n"});
                // this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function () {
               var oBundle = this.getView().getModel("i18n").getResourceBundle();
               var sRecipient = this.getView().getModel().getProperty("/recipient/name");
               var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
