sap.ui.define([
  "sap/ui/core/ComponentContainer"
],
  function (ComponentContainer) {
    new ComponentContainer({
       name : "logaligroup.invoices",
       settings : {
        id : "logaligroup.invoices"
       },
       async : true
    }).placeAt("content");
    // XMLView.create({
    //   viewName: "logaligroup.invoices.view.Main"
    // }).then(function (oView) {
    //   oView.placeAt("content");
    // });
  });