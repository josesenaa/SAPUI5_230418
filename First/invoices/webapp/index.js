sap.ui.define([
  "sap/ui/core/mvc/XMLView"
],
  function (XMLView) {
    XMLView.create({
      viewName: "logaligroup.invoices.view.Main"
    }).then(function (oView) {
      oView.placeAt("content");
    });
  });