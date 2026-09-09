
if (typeof gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog = {};
gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.userFunc0x11c2e30 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._playgamaBridgeExtension.isLastActionCompletedSuccessfully = false;

return new Promise(resolve => {
    bridge.payments.getCatalog()
        .then(data => {
            gdjs._playgamaBridgeExtension.isLastActionCompletedSuccessfully = true;
            gdjs._playgamaBridgeExtension.paymentsCatalog = data;
        })
        .catch(error => console.log(error))
        .finally(() => {
            gdjs._playgamaBridgeExtension.nextIsPaymentsGetCatalogCompleted = true;
            resolve();
        });
});

};
gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.userFunc0x11c2e30(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PlaygamaBridge__PaymentsGetCatalog.registeredGdjsCallbacks = [];