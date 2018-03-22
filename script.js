let familyTree = [];

class GrandParent {
  constructor(aName, hairColor, eyeColor, vertical) {
    this.aName = aName;
    this.hairColor = hairColor;
    this.eyeColor = eyeColor;
    this.vertical = vertical;
    familyTree.push(this);
    console.log(this.aName + ' Can Jump ' + this.vertical + ' Inches!');
  }
};

class Parent extends GrandParent {};

class Children extends Parent {};

var grandpaA = new GrandParent('Grandpa A', 'gray', 'blue', 2);
var grandmaA = new GrandParent('Grandma A', 'white', 'brown', -72);
var grandpaB = new GrandParent('Grandpa B', 'black', 'brown', 5);
var grandmaB = new GrandParent('Grandma B', 'white', 'brown', 0);
var mom = new Parent('Mom', 'black', 'brown', 5);
var dad = new Parent('Dad', 'brown', 'blue', 8);
var son = new Children('Son', 'brown', 'blue', 10);
var sister = new Children('Sister', 'blonde', 'blue', 7);
var sister2 = new Children('Sister 2', 'brown', 'hazel', 6);

console.log(familyTree);
