objCalculator ={  //se especifican las funciones de la calculadora
	addNumber: function(a,b){
		return a + b;
	},
	substractNumber: function(a,b){
		return a-b;
	},
	multiplyNumber: function(a,b){
		return a*b;
	},
	divideNumber: function(a,b){
		return a/b;
	}
}

if(typeof module != 'undefined' && module.exports){
	module.exports = objCalculator;
}
















