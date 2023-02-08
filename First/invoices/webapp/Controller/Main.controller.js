sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     */
    function (Controller, MessageToast) {
        'use strict';
        return Controller.extend("logaligroup.invoices.Controller.Main", {
            onShowHello: function () {
                MessageToast.show("Hello World!!!");
            }
        });
    });
