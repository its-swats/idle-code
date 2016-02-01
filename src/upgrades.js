export const upgrades = {
  "hardware": {
    "item1": {
      "id": "hard_0",
      "name": "More Ram",
      "description": "You program yourself some more RAM, somehow",
      "effects": "Store more code",
      "cost": "5",
      "increase": "maxCode = maxCode + 5",
      "owned": "0"
    },
    "item2": {
      "id": "hard_1",
      "name": "Faster processor",
      "description": "You code yourself a really fast processor, in 3d",
      "effects": "Get code faster",
      "cost": "5",
      "increase": "totalTime = totalTime - 50",
      "owned": "0"
    }
  }, 
  "software": {
    "item1" : {
      "id": "soft_0",
      "name": "SublimeText",
      "description": "It's version 1.0",
      "effects": "Increase code speed",
      "cost": "5",
      "increase": "codePerTick = codePerTick + 5",
      "owned": "0"
    }
  }
};