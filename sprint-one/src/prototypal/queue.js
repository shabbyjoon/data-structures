
var Queue = function() {
  
  var someInstance = Object.create(queueMethods);
  someInstance.count = count;
  return someInstance;

};

var count = 0;
var storage = {};
var queueMethods = {
	enqueue : function(value) {
	 storage[this.count] = value;
     this.count++;

	},
	dequeue : function() {
    var result = storage[0];
    delete storage[this.count];
    this.count --;
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    return result;

	},
	size : function() {
	if( this.count < 0 ){
		return 0;
	 }  
	 return this.count;
	}	
};