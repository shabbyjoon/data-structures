class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(count) {
  	this.storage = {};
  	this.count = 0;

  }

  push(value){
   	this.storage[this.count] = value;
    this.count++;

  }

  pop(){
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
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