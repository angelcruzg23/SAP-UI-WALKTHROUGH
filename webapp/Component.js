sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"
  ],
  function (UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        manifest : "json"
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

        //Set dialog 
        this._helloDialog = new HelloDialog(this.getRootControl());

        //Create the view based on the url/hash
        this.getRouter().initialize();
        
      },

      exit : function () {
        this._helloDialog.destroy() ;
        delete this._helloDialog;
      },

      openHelloDialog : function () {
        this._helloDialog.open();
      }


    });
  }
);
