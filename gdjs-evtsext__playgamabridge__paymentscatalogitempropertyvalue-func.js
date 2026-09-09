
if (typeof gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue = {};
gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.userFunc0x11b3e38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const productIndex = eventsFunctionContext.getArgument("ProductIndex");
const property = eventsFunctionContext.getArgument("Property");

const { paymentsCatalog } = gdjs._playgamaBridgeExtension;

if (paymentsCatalog.length > 0) {
    const product = paymentsCatalog[productIndex] || {};
    
    eventsFunctionContext.returnValue = isNaN(+property)
        ? product[property]
        : product[Object.keys(product)[property]];
} else {
    eventsFunctionContext.returnValue = "";
}


};
gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.userFunc0x11b3e38(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.func = function(runtimeScene, ProductIndex, Property, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlaygamaBridge"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlaygamaBridge"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "ProductIndex") return ProductIndex;
if (argName === "Property") return Property;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaygamaBridge__PaymentsCatalogItemPropertyValue.registeredGdjsCallbacks = [];