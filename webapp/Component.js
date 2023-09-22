sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        rootView: {
          viewName: "sap.ui.demo.walkthrough.view.App",
          type: "XML",
          async: true,
          id: "app",
        },
      },
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);

        //Set data models
        //Set data model on the view en JSON Format
        var oData = {
          recipient: {
            name: "UI5",
          },
        };

        //Create el JSON Model
        var oModel = new JSONModel(oData);

        //Assign model to the current view
        this.setModel(oModel);

        //Set i18n model on VIew
        var i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [],
          fallbackLacole: "",
        });

        //Set to the view
        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
