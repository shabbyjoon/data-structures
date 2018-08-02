var Stack = function() {
  this.count = count;

};

var count = 0;
var storage = {};


Stack.prototype.push = function(value) {
	storage[this.count] = value;
    this.count++;
};

Stack.prototype.pop = function() {
    this.count--;
    var result = storage[this.count];
    delete storage[this.count];
    return result;
};

Stack.prototype.size = function() {
	if ( this.count < 0 ){
		return 0;
	} else {
	return this.count;
    }
};