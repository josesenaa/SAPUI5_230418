sap.ui.define([
    "sap/ui/core/mvc/Controller",
   // "sap/m/MessageToast"
   //@param {typeof sap.m.MessageToast} MessageToast
    ],
    /**
    * @param {typeof sap.ui.core.mvc.Controller} Controller
    */
    function (Controller, MessageToast) {
        "use strict";
        return Controller.extend("logaligroup.sapui5.controller.App", {
        onInit: function () {
        },

        onOpenDialogHeader: function() {
          this.getOwnerComponent().openHelloDialog();
        }
      //  onShowHello: function () {
        //read text from i18n model
      // var oBundle = this.getView().getModel("i18n").getResourceBundle();
        //read property from data model
     //   var sRecipient = this.getView().getModel().getProperty("/recipient/name");
      //  var sMsg = oBundle.getText("helloMsg", [sRecipient]);
      //  MessageToast.show(sMsg);
       // }
        });
        });