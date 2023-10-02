sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
], function (ManagedObject, Fragment) {

    "use strict"

    return ManagedObject.extend("sap.ui.demo.walkthrough.controller.HelloDialog", {

        constructor: function (oView) {
            this._oView = oView;
        },

        exit: function () {
            delete this._oView;
        },

        open: function () {
            var oView = this._oView;

            //Create dialog lazzy 
            //If no exist a dialog created before, this must be closed 
            if (!oView.byId("helloDialog")) {
                //Create fragment controller 
                var oFragmentController = {

                    //Close before create a new one Controller
                    onCloseDialog: function () {
                        oView.byId("helloDialog").close();
                    }
                }

                //Create Fragment asynchronous // oDialog use below
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: oFragmentController
                }).then(function (oDialog) { //oDialog is the object loaded before 
                    //Connect dialog to rootview of the component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open()
                })

            } else {
                oView.byId("helloDialog").open();
            }
        },

        close: function () {

        }


    })

})