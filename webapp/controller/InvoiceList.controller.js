sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel,formatter,Filter,FilterOperator) {

    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {

        //Create reference 
        formatter: formatter,

        onInit: function () {

/*             var oDataCurrency = {
                Currency: {
                    currency: "USD"
                }
            } */

            var oModel = new JSONModel({
                Currency : "USD"
            })

            this.getView().setModel(oModel, "view")

        },

        onFilterInvoices : function(oEvent) {

            //Build filter array 
            var aFilter = [];

            //Create a query 
            var sQuery = oEvent.getParameter("query");

            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery))
            }

            //Filter binding to the list 
            var oList = this.byId("invoiceList");

            //Reference to the binding attribute of the list 
            var oBinding = oList.getBinding("items")

            //Set the result of the filter to the list 
            oBinding.filter(aFilter)

        },

        onPress: function(oEvent){
            var oItem = oEvent.getSource();
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                invoicePath : window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
        
    })

})