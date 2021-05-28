function limpiarFormulario(){
	document.getElementById("miForm").reset();
}


var comparar = function (n1,n2,n3){

		var numero1 = parseInt(document.getElementById("numero1").value);

		var numero2 = parseInt(document.getElementById("numero2").value);

		var numero3 = parseInt(document.getElementById("numero3").value);

		if (numero1<numero2 && numero1<numero3) 
		{
		resultado= "El número MENOR es el PRIMERO que corresponde a = " + numero1;
		}
		else
		{
		if (numero2<numero3) 
		{
		resultado = "El número MENOR es el SEGUNDO, que corresponde a = " + numero2;
		}
		else
		{
		resultado= "El número MENOR es el TERCERO, que corresponde a = " + numero3;
		}
		}

		return resultado;
	}

	function limpiarFormulario(){
	document.getElementById("miForm").reset();
}

var convertir = function(cm){

	var centimetros = parseFloat(document.getElementById("centimetros").value);

	var resultado = (centimetros * .39); 

	return centimetros + " centímetros son: " + resultado + " pulgadas";

}

	function limpiarFormulario(){
	document.getElementById("miForm").reset();
}

var convertir2 = function(mts){

	var metros = parseFloat(document.getElementById("metros").value);

	var resultado = (metros* 1.094); 

	return metros + " metros son: " + resultado + " yardas";
}

