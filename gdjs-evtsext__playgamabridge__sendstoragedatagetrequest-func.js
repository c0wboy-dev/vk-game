
if (typeof gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest = {};
gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.userFunc0xac3180 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._playgamaBridgeExtension.isLastActionCompletedSuccessfully = false;

const { storageData, storageDataGetRequestKeys } = gdjs._playgamaBridgeExtension;
const storageType = eventsFunctionContext.getArgument("StorageType");

return new Promise(resolve => {
    bridge.storage.get(storageDataGetRequestKeys, storageType === "default" ? null : storageType)
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let key = storageDataGetRequestKeys[i];
                let value = data[i];
                storageData[key] = value;
            }

            gdjs._playgamaBridgeExtension.isLastActionCompletedSuccessfully = true;
        })
        .catch(error => console.log(error))
        .finally(() => {
            gdjs._playgamaBridgeExtension.storageDataGetRequestKeys = []
            gdjs._playgamaBridgeExtension.nextIsStorageDataGetRequestCompleted = true;
            resolve()
        });
})

};
gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.userFunc0xac3180(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.func = function(runtimeScene, StorageType, parentEventsFunctionContext) {
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


gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PlaygamaBridge__SendStorageDataGetRequest.registeredGdjsCallbacks = [];