var Stack = function() {

  var someInstance = Object.create(stackMethods);
  someInstance.count = count;
  return someInstance;

};
var count = 0;
var storage = {};

var stackMethods = {
  push : function(value) {
    storage[this.count] = value;
    this.count++;
	},

  pop : function() {
    this.count--;
    var result = storage[this.count];
    delete storage[this.count];
    return result;
  },

  size : function() {
  	if ( this.count < 0){
  		return 0;
  	} else {
  		return this.count;
  	}
  	

  }
};