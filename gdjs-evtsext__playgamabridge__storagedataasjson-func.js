
if (typeof gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON = {};
gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.userFunc0xa1a1d0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const key = eventsFunctionContext.getArgument("Key");
let value = gdjs._playgamaBridgeExtension.storageData[key];

if (typeof value !== 'string') {
    value = JSON.stringify(value);
}

eventsFunctionContext.returnValue = value;
};
gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.userFunc0xa1a1d0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.func = function(runtimeScene, Key, parentEventsFunctionContext) {
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
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaygamaBridge__StorageDataAsJSON.registeredGdjsCallbacks = [];