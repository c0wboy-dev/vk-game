
if (typeof gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId = {};
gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.userFunc0x1232ae0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const entryIndex = eventsFunctionContext.getArgument('EntryIndex');

if (gdjs._playgamaBridgeExtension.leaderboardEntries.length > 0) {
    const entry = gdjs._playgamaBridgeExtension.leaderboardEntries[entryIndex];
    eventsFunctionContext.returnValue = entry['id'];
} else {
    eventsFunctionContext.returnValue = '';
}

};
gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.userFunc0x1232ae0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.func = function(runtimeScene, EntryIndex, parentEventsFunctionContext) {
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
if (argName === "EntryIndex") return EntryIndex;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaygamaBridge__LeaderboardEntryId.registeredGdjsCallbacks = [];