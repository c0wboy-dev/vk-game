
if (typeof gdjs.evtsExt__PlaygamaBridge__SendMessage !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__SendMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__SendMessage = {};
gdjs.evtsExt__PlaygamaBridge__SendMessage.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__SendMessage.userFunc0xd9e740 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const message = eventsFunctionContext.getArgument("Message")
const options = gdjs._playgamaBridgeExtension.actionParametersContainer

bridge.platform.sendMessage(bridge.PLATFORM_MESSAGE[message], options)

gdjs._playgamaBridgeExtension.actionParametersContainer = {}

};
gdjs.evtsExt__PlaygamaBridge__SendMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__SendMessage.userFunc0xd9e740(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__SendMessage.func = function(runtimeScene, Message, parentEventsFunctionContext) {
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
if (argName === "Message") return Message;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__SendMessage.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PlaygamaBridge__SendMessage.registeredGdjsCallbacks = [];