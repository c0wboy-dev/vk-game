
if (typeof gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable = {};
gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.userFunc0xb3e4f0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const storageType = eventsFunctionContext.getArgument("StorageType");
eventsFunctionContext.returnValue = bridge.storage.isAvailable(storageType);

};
gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.userFunc0xb3e4f0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.func = function(runtimeScene, StorageType, parentEventsFunctionContext) {
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
if (argName === "StorageType") return StorageType;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaygamaBridge__IsStorageAvailable.registeredGdjsCallbacks = [];