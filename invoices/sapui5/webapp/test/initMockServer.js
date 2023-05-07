sap.ui.define([
  "../localService/mockserver",
  "sap/m/MessageBox"
], function(mockserver, MessageBox){ 
    "use stict";

    var aMockservers = [];

    aMockservers.push(mockserver.init());

    Promise.all(aMockservers).catch(function(oError){
        MessageBox.error(oError.message);
    }).finally(function(){
        sap.ui.require(["sap/ui/core/ComponentSupport"]);
    });
    
});