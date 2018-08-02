class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(count) {
  	this.storage = {};
  	this.count = 0;
  }

  enqueue(value){
  	this.storage[this.count] = value;
    this.count++;

  }

  dequeue(){
  	var result = this.storage[0];
    delete this.storage[this.count];
    this.count --;
    for (var key in this.storage) {
      this.storage[key - 1] = this.storage[key];
    }
    console.log(result)
    return result;

  }

  size(){
  	if( this.count < 0){
		return 0;
	} else {
	return this.count;
    }
  }

}
