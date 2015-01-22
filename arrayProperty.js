//Just like you can add methods to your own constructor, you can also add methods and properties to built in classes in JavaScript like Arrays and Objects.

//Add a reverse method to the String 'class' prototype so that every instance of String can call reverse and reverse itself.
  
  String.prototype.reverseMethod = function() {
  	var arr = this.split("");
  	arr.reverse();
  	return arr.join("");
  };