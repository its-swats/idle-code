export const upgrades = {
  "purchasables": {
    "hard_0": {
      "id": "hard_0",
      "name": "More Ram",
      "description": "You program yourself some more RAM, somehow",
      "effects": "Store more code",
      "cost": 1,
      "increase": ["maxCode", +5],
      "owned": 0
    },
    "hard_1": {
      "id": "hard_1",
      "name": "Faster processor",
      "description": "You code yourself a really fast processor, in 3d",
      "effects": "Get code faster",
      "cost": 5,
      "increase": ["totalSpeed", -50],
      "owned": 0
    },
    "soft_0" : {
      "id": "soft_0",
      "name": "SublimeText",
      "description": "It's version 1.0",
      "effects": "Increase code speed",
      "cost": 5,
      "increase": ["codePerTick", +5],
      "owned": 0
    }
  }
};