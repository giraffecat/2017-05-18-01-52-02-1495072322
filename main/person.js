var Person = function(){	
	this.name = "liyatang";
};
Person.prototype = {
	//可以在这里提供Person的基本功能
	getName : function(){
		return this.name;
	}
}
