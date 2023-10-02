sap.ui.define([], function () {
    "use strict"

    return {
        statusText: function (sStatus) {
            var resourceBundle = this.getView().getModel('i18n').getResourceBundle();

            //JS switch  status 
            switch (sStatus) {
                case "A":
                    return resourceBundle.getText("invoiceStatusA");
                case "B":
                    return resourceBundle.getText("invoiceStatusB");
                case "C":
                    return resourceBundle.getText("invoiceStatusC");

                default:
                    return sStatus;
            }
        }
    }
})