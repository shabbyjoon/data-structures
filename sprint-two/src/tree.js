var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];  
  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, node) {
  if(target === node.value) {
    return true;  
    
  } else if(node.children.length === 0) {
    return; 
  }else {
    for(var i = 0; i < node.children.length; i++){
      if(node.children[i].contains(target, node.children[i])){
        return true;
      } 
    }
  }
  return false;
 };


/*
 * Complexity: What is the time complexity of the above functions?
 */
