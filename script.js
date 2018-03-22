class GrandParent {
  constructor(aName, hairColor, eyeColor, vertical) {
    this.aName = aName;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.vertical = vertical;
    console.log(this);
  }
  // loopDeLoop() {
  //
  // }
};

class Parent extends GrandParent {

};

class Children extends Parent {

};

var grandpaA = new GrandParent('Grandpa A', 'gray', 'blue', 1);
var grandmaA = new GrandParent('Grandma A', 'white', 'brown', 0);
var grandpaB = new GrandParent('Grandpa B', 'black', 'brown', 5);
var grandmaB = new GrandParent('Grandma B', 'white', 'brown', 0);
var mom = new Parent('Mom', 'black', 'brown', 5);
var dad = new Parent('Dad', 'brown', 'blue', 8);
var son = new Children('Son', 'brown', 'blue', 10);
var sister = new Children('Sister', 'blonde', 'blue', 7);
var sister2 = new Children('Sister 2', 'brown', 'hazel', 6);
