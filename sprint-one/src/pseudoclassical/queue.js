var Queue = function() {
  this.count = count;
};

var count = 0;
var storage = {};

Queue.prototype.enqueue = function(value) {
  	 storage[this.count] = value;
     this.count++;
};

Queue.prototype.dequeue = function() {
    var result = storage[0];
    delete storage[this.count];
    this.count --;
    for (var key in storage) {
      storage[key - 1] = storage[key];
    }
    return result;

};

Queue.prototype.size = function() {
	if( this.count < 0){
		return 0;
	} else {
	return this.count;
    }

};

