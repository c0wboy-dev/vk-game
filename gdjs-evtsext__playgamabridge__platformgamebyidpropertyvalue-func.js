
if (typeof gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue = {};
gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.userFunc0xb011f8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const property = eventsFunctionContext.getArgument("Property");

if (!gdjs._playgamaBridgeExtension.gameById) {
    eventsFunctionContext.returnValue = '';
    return;
}

if (typeof property === 'number') {
    let properties = Object.keys(gdjs._playgamaBridgeExtension.gameById);
    let propertyName = properties[property];
    eventsFunctionContext.returnValue = gdjs._playgamaBridgeExtension.gameById[propertyName];
    return;
}

eventsFunctionContext.returnValue = gdjs._playgamaBridgeExtension.gameById[property];
};
gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.userFunc0xb011f8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.func = function(runtimeScene, Property, parentEventsFunctionContext) {
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


gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.eventsList0(runtimeScene, eventsFunctionContext);


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PlaygamaBridge__PlatformGameByIdPropertyValue.registeredGdjsCallbacks = [];