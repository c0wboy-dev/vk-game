
if (typeof gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue = {};
gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.userFunc0x100f3f0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const property = eventsFunctionContext.getArgument("Property");
const { paymentsPurchase } = gdjs._playgamaBridgeExtension;

if (!paymentsPurchase) {
    eventsFunctionContext.returnValue = "";
} else {
    if (property.includes('.')) {
        const parts = property.split('.');
        let value = paymentsPurchase;
        for (const part of parts) {
            value = value?.[part];
        }
        eventsFunctionContext.returnValue = value ?? '';
    } else {
        const value = isNaN(+property)
            ? paymentsPurchase[property]
            : paymentsPurchase[Object.keys(paymentsPurchase)[property]];
        eventsFunctionContext.returnValue = typeof value === 'object' && value !== null
            ? JSON.stringify(value)
            : (value ?? '');
    }
}


};
gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.userFunc0x100f3f0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.func = function(runtimeScene, Property, parentEventsFunctionContext) {
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
if (argName === "Property") return Property;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaygamaBridge__PaymentsLastPurchasePropertyValue.registeredGdjsCallbacks = [];