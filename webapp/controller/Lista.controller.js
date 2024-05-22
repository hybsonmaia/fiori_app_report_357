sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/core/format/DateFormat",
    "sap/ui/core/UIComponent",
    "br/com/gestao/fioriappreport357/util/Formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Filter, FilterOperator, DateFormat, UIComponent, Formatter) {
        "use strict";

        return Controller.extend("br.com.gestao.fioriappreport357.controller.Lista", {

            objFormatter: Formatter,

            onInit: function () {

                //var oConfiguration = sap.ui.getCore().getConfiguration();
                //oConfiguration.setFormatLocale("pt-BR");

            },

            onSearch: function () {

                var oFilter = new Filter({
                    filters: [
                        new Filter({
                            path: "ProductId",
                            operator: FilterOperator.Contains,
                            value1: this.getView().byId("inputProdutoId").getValue()
                        }),
                        new Filter({
                            path: "Name",
                            operator: FilterOperator.Contains,
                            value1: this.getView().byId("inputProdutoNome").getValue()
                        })
                    ],
                    and: true
                });

                var oTable = this.getView().byId("tableProdutos");
                var binding = oTable.getBinding("items");

                binding.filter(oFilter);


            },

            onRounting: function () {
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Detalhes");
            },

            onSelectedItem: function (oEvent) {

                var oProductId = oEvent.getSource().getBindingContext().getProperty("ProductId");

                var oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("Detalhes", {
                    ProductId: oProductId
                });

            },

            onFuncaoGit: function() {
                
            }

        });
    });
