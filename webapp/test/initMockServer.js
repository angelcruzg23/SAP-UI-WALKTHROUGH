sap.ui.define([
    "../localService/mockserver",
], function(mockserver) {
    'use strict';
    
    //Initialise the mock server 
    mockserver.init(); 

    //Initialise the embedded component on the html page 
    sap.ui.require(["sap/ui/core/ComponentSupport"]);

});