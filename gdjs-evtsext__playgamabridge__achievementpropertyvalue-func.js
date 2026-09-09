
if (typeof gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue !== "undefined") {
  gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue = {};
gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.idToCallbackMap = new Map();


gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.userFunc0x919888 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const achievementIndex = eventsFunctionContext.getArgument("AchievementIndex");
const property = eventsFunctionContext.getArgument("Property");

const { achievementsList } = gdjs._playgamaBridgeExtension;

if (achievementsList.length > 0) {
    const achievement = achievementsList[achievementIndex] || {};
    
    eventsFunctionContext.returnValue = isNaN(+property)
        ? achievement[property]
        : achievement[Object.keys(achievement)[property]];
} else {
    eventsFunctionContext.returnValue = "";
}


};
gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.userFunc0x919888(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.func = function(runtimeScene, AchievementIndex, Property, parentEventsFunctionContext) {
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
if (argName === "AchievementIndex") return AchievementIndex;
if (argName === "Property") return Property;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PlaygamaBridge__AchievementPropertyValue.registeredGdjsCallbacks = [];