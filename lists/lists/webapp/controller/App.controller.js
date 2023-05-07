sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("lists.controller.App", {
            onInit: function () {
               let oModel = new JSONModel();
               oModel.loadData("../model/listData.json");
               this.getView().setModel(oModel); 
            }
        });
    });
