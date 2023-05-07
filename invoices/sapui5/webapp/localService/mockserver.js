sap.ui.define([
  "sap/ui/core/util/MockServer",
  "sap/ui/model/json/JSONModel",
  "sap/ui/util/UriParameters",
  "sap/base/log"  
],function(MockServer, JSONModel, UriParameters, Log){

    "use strict";

    var oMockServer,
       _sAppPath = "logaligroup/sapui5/",
       _sJsonFilesPath = _sAppPath + "localService/mockdata";

    var oMockServerInterface = {
      
        init: function(oOptionsParameter) {
            var oOptions = oOptionsParameter || {};

            //return new Promise(function(fnResolve, fnReject){
                var sManifestUrl = sap.ui.require.toUrl(_sAppPath + "manifest.json"),
                    oManifestModel = new JSONModel(sManifestUrl);

                    oManifestModel.attachRequestCompleted(function () {
                        //get metadata
                        var oUriParameters = new UriParameters(window.location.href),
                            sJsonFileUrl = sap.ui.require.toUrl(_sJsonFilesPath),
                            oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/north"),
                            sMetaDataUrl = sap.ui.require.toUrl(_sAppPath + oMainDataSource.settings.localUri),
                            sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();
                            
                            if (!oMockServer) {
                                oMockServer = new MockServer({
                                    rootUri: sMockServerUrl
                                });
                            } else {
                                oMockServer.stop();
                            }

                            MockServer.config({
                                autoRespond: true,
                                autoRespondAfter: (oOptions.delay || oUriParameters.get("serverDelay") || 500)
                            });

                            oMockServer.simulate(sMetaDataUrl,{
                                sMockDataBaseUrl : sJsonFileUrl,
                                bGenerateMissingMockData: true
                            });

                            var aRequest = oMockServer.getRequests();

                            var fnResponse = function (iErrCode, sMessage, aRequest){
                                aRequest.response = function (oXhr) {
                                    oXhr.respond(iErrCode, {"Content-Type":"text/plain;charset=utf-8"}, sMessage);
                                }
                            }
                            if (oOptions.metadataError || oUriParameters.get("metadataError")) {
                                aRequest.forEach(function(aEntry) {
                                    if (aEntry.path.toString().indexOf("$metadada") > -1 ) {
                                        fnResponse(500, "metadata Error", aEntry)
                                    }
                                });
                            }

                            var sErrorParam = oOptions.errorType || oUriParameters.get("errorType"),
                                iErrorCode = sErrorParam === "badRequest" ? 400 : 500;

                                if (sErrorParam) {
                                    aResquest.forEach(function (aEntry) {
                                        fnResponse(iErrorCode, sErrorPram, aEntry)
                                    });
                                }

                            oMockServer.setRequests(aRequest);  
                            oMockServer.start();
                            
                            Log.info("Running the app with Mock Server");
                            fnResolve();                           
                    });

                    // Error in the data read
                    oManifestModel.attachRequestFailed(function(){
                      var sError = "Failed to load application manifest";

                      Log.error(sError);
                      fnReject();
                    });

            //});

        }

    };
    
    return oMockServerInterface;
});