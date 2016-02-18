export const upgrades = {
  "purchasables": {
    "hard_0": {
      "id": "hard_0",
      "name": "A Bigger Hard Drive",
      "description": "A bigger hard drive lets you store more code. How you coded something physical, we'll never node. ",
      "effects": "Increases code storage by 5 lines",
      "cost": 1,
      "increment": 5,
      "increase": ["maxCode", +5],
      "owned": 0
    },
    "hard_1": {
      "id": "hard_1",
      "name": "An extra i7 Core",
      "description": "An additional core causes your code to compile code quicker. ",
      "effects": "Increases code speed",
      "cost": 5,
      "increment": 15,
      "increase": ["totalSpeed", -50],
      "owned": 0
    },
    "soft_0" : {
      "id": "soft_0",
      "name": "A Word Processor",
      "description": "It's version 1.0",
      "effects": "Increase code speed",
      "cost": 10,
      "increment": 1,
      "increase": ["codePerTick", +5],
      "owned": 0
    },
    "soft_1" : {
      "id": "soft_1",
      "name": "A Good Dinner",
      "description": "You code up a nice chicken dinner, and then eat it. Gets the brain juices flowing.",
      "effects": "Increase code speed",
      "cost": 1,
      "increment": 1,
      "increase": ["codePerTick", +1],
      "owned": 0
    }
  }
};