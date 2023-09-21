sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast", 
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (Controller,
	MessageToast,
	JSONModel,
	ResourceModel) {

	"use strict"

	return Controller.extend("sap.ui.demo.walkthrough.App",{

		/**
		 * @override
		 */
		onInit: function() {
			//Set data model on the view en JSON Format
			var oData = {
				recipient : {
					name : "UI5"
				}
			};

			//Create el JSON Model 
			var oModel = new JSONModel(oData);

			//Assign model to the current view 
			this.getView().setModel(oModel);

			//Set i18n model on VIew 
			var i18nModel = new ResourceModel({
				bundleName : "sap.ui.demo.walkthrough.i18n.i18n",
				supportedLocales: [],
				fallbackLacole: ""
			});

			//Set to the view 
			this.getView().setModel(i18nModel,"i18n");
		},

		onPress : function () {
			
			//Read message from the i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			var sMessage   = oBundle.getText("HelloMsg",[sRecipient]);

			//Show a native or vanailla alert JS 
			MessageToast.show(sMessage);

		}
	});


})