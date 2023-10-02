sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", 
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    'use strict';

    Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {

        onPress: function () {
            //Read message from the i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView()
                .getModel()
                .getProperty("/recipient/name");
            var sMessage = oBundle.getText("HelloMsg", [sRecipient]);

            //Show a native or vanailla alert JS
            MessageToast.show(sMessage);
        },

        onOpenDialog: function () {
            this.getOwnerComponent().openHelloDialog();
        },

        onCloseDialog: function () {
            this.byId("helloDialog").close() 
        }

    })
});