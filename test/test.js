var calculator = require('../src/app')

var assert = require ("assert") //assert dice "si son iguales"

describe('Calculadora', ()=>{ //aqui se especifican los test para cada funcion de la calculadora
	it('should add two numbers',()=>{
		assert.equal(5,calculator.addNumber(2,3));  //como parametro se pasa un numero y el objeto calculadora
		assert.equal(9,calculator.addNumber(3,6)); //si el resultado de ambos numeros que se pasan a la caluladora es igual al numero de prueba, el test resulto!!
	});

	it('Should substract two numbers',()=>{
		assert.equal(5, calculator.substractNumber(8,3));
		assert.equal(3, calculator.substractNumber(9,6));
	});
	it('Should multiplu two numbers', ()=>{
		assert.equal(9, calculator.multiplyNumber(3,3));
		assert.equal(10, calculator.multiplyNumber(2,5));
	});
	it('Should divide two numbers', ()=>{
		assert.equal(2, calculator.divideNumber(6,3));
		assert.equal(1, calculator.divideNumber(9,9));
	});

});
