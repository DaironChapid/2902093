//AREA DE TRIANGULO
document.getElementById('openModal').onclick = function() {
  document.getElementById('miModal').style.display ="block";
}

document.getElementsByClassName('cerrar')[0].onclick = function() {
  document.getElementById('miModal').style.display = "none";
}

function calcularArea() {
    
    var base = document.getElementById('base').value;
    var altura = document.getElementById('altura').value;
    var area = (base * altura) / 2;
    
document.getElementById('area').textContent = area + ' unidades cuadradas';
  }



//SUMA DE DOS NUMEROS
document.getElementById('openModalSuma').addEventListener('click', function() {
  document.getElementById('modalSuma').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function sumarNumeros() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var suma = num1 + num2;
  document.getElementById('resultadoSumaTexto').textContent = suma;
}


//NUMERO ELEVADO AL CUADRADO
  document.getElementById('openModalElevado').addEventListener('click', function() {
    document.getElementById('modalElevado').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
    cerrarButtons[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}
function elevarAlCuadrado() {
    var num = parseFloat(document.getElementById('ingresaNum').value);
    if (!isNaN(num)) { 
        var cuadrado = num ** 2;
        document.getElementById('resultadoNum').textContent = cuadrado;
    } else {
        document.getElementById('resultadoNum').textContent = "Por favor, ingrese un número válido.";
    }
}


  //Conversion euros a dolares
  document.getElementById('openModalConversion').addEventListener('click', function() {
      document.getElementById('modalConversion').style.display = 'block';
  });

  var cerrarButtons = document.getElementsByClassName('cerrar');
  for (let i = 0; i < cerrarButtons.length; i++) {
      cerrarButtons[i].addEventListener('click', function() {
          this.parentElement.parentElement.style.display = 'none';
      });
  }

function eurosADolares() {
  var tasaDeCambio = 1.12; // TASA DE CAMBIO
  var euros = parseFloat(document.getElementById('ingresaTotalEuros').value);
  var dolares = euros * tasaDeCambio;
  document.getElementById('resultadoConversion').textContent = " La conversion seria: " + dolares.toFixed(2) + ' USD';
}


  //AREA Y VOLUMEN DE UN CILINDRO
  document.getElementById('openModalCilindro').addEventListener('click', function() {
    document.getElementById('modalCilindro').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
    cerrarButtons[i].addEventListener('click', function() {
        this.parentElement.parentElement.style.display = 'none';
    });
}

function calcularAreaYVolumenCilindro() {
    var radio = parseFloat(document.getElementById('valor1').value);
    var altura = parseFloat(document.getElementById('valor2').value);
    if (!isNaN(radio) && !isNaN(altura)) { 
        var areaBase = Math.PI * radio ** 2;
        var areaLateral = 2 * Math.PI * radio * altura;
        var areaTotal = 2 * areaBase + areaLateral;
        var volumen = areaBase * altura;
        document.getElementById('textoResultado').textContent = "El área del cilindro es: " + areaTotal.toFixed(2) + ". El volumen del cilindro es: " + volumen.toFixed(2);
    } else {
        document.getElementById('textoResultado').textContent = "Por favor, ingrese valores válidos.";
    }
}


//AREA Y PERIMETRO DE CUADRADO
  document.getElementById('openModalCuadrado').addEventListener('click', function(){
    document.getElementById('modalCuadrado').style.display = 'block';
});

Array.from(document.getElementsByClassName('cerrar')).forEach(element => {
    element.addEventListener('click', function() {
        document.getElementById('modalCuadrado').style.display = 'none';
    });
});

function calcularAreaYPerimetroCuadrado() {
    var lado = parseFloat(document.getElementById('ladoCuadrado').value); 
    var area = lado ** 2;
    var perimetro = lado * 4;
    document.getElementById('resultadoCuadradoTexto').textContent = "El área del cuadrado es: " + area + ", El perímetro del cuadrado es: " + perimetro;
}


//LONGITUD Y AREA DE CIRCUNFERENCIA
document.getElementById('openModalCircunferencia').addEventListener('click', function() {
  document.getElementById('modalCircunferencia').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function calcularLongitudYAreaCircunferencia() {
  var radio = parseFloat(document.getElementById('radioCircunferencia').value);
  if (!isNaN(radio)) { 
      var longitud = 2 * Math.PI * radio;
      var area = Math.PI * radio ** 2;
      document.getElementById('resultadoCircunferenciaTexto').textContent = "La longitud de la circunferencia es: " + longitud.toFixed(2) + ". El área de la circunferencia es: " + area.toFixed(2);
  } else {
      document.getElementById('resultadoCircunferenciaTexto').textContent = "Por favor, ingrese un valor válido.";
  }
}


//PROMEDIO DE TRES NUMEROS
document.getElementById('openModalPromedio').addEventListener('click', function() {
  document.getElementById('modalPromedio').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function calcularPromedio() {
  var primerNumero = parseFloat(document.getElementById("primerNumero").value);
  var segundoNumero = parseFloat(document.getElementById("segundoNumero").value);
  var tercerNumero = parseFloat(document.getElementById("tercerNumero").value);
  
  if (!isNaN(primerNumero) && !isNaN(segundoNumero) && !isNaN(tercerNumero)) {
      var promedio = (primerNumero + segundoNumero + tercerNumero) / 3;
      document.getElementById('resultadoPromedioTexto').textContent = promedio.toFixed(2);
  } else {
      document.getElementById('resultadoPromedioTexto').textContent = "Por favor, ingresa números válidos en todos los campos.";
  }
}



//CONDICIONALES//


//VERIFICAR POSITIVO Y NEGATIVO//


  document.getElementById('openModalVerificacion1').addEventListener('click', function() {
      document.getElementById('modalVerificacion1').style.display = 'block';
  });

  var cerrarButtons = document.getElementsByClassName('cerrar');
  for (let i = 0; i < cerrarButtons.length; i++) {
      cerrarButtons[i].addEventListener('click', function() {
          this.parentElement.parentElement.style.display = 'none';
      });
  }


  function verificarPositivoNegativo() {
        var num = parseFloat(document.getElementById('numero').value);
        var resultadoTexto = document.getElementById('resultadoVerificacionTexto');
    
        if (isNaN(num)) {
            resultadoTexto.innerText = "Por favor ingrese un número válido.";
        } else {
            if (num > 0) {
                resultadoTexto.innerText = "El número es positivo.";
            } else if (num < 0) {
                resultadoTexto.innerText = "El número es negativo.";
            } else {
                resultadoTexto.innerText = "El número es cero.";
            }
        }
    }



//Algoritmo que diga cual es mayor o menor


  document.getElementById('openModalVerificacion2').addEventListener('click', function() {
      document.getElementById('modalVerificacion2').style.display = 'block';
  });

  var cerrarButtons = document.getElementsByClassName('cerrar');
  for (let i = 0; i < cerrarButtons.length; i++) {
      cerrarButtons[i].addEventListener('click', function() {
          this.parentElement.parentElement.style.display = 'none';
      });
  }
  function mayorYMenor() {
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultadoMayorMenor = document.getElementById("resultadoMayorYmenor");
  
    if (isNaN(numero1) || isNaN(numero2)) {
      resultadoMayorMenor.textContent = "Por favor ingrese un número válido.";
    } else if (numero1 > numero2) {
      resultadoMayorMenor.textContent = numero1 + " es mayor que " + numero2;
    } else if (numero1 < numero2) {
      resultadoMayorMenor.textContent = numero1 + " es menor que " + numero2;
    } else {
      resultadoMayorMenor.textContent = "Los números son iguales";
    }
  }
  



//MAYOR Y MENOR ENTRE 3 NUMEROS

document.getElementById('openModalVerificacion3').addEventListener('click', function() {
  document.getElementById('modalVerificacion3').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}

function mayorYMenorTresNumeros() {
  var num1 = parseInt(document.getElementById("num3_1").value);
  var num2 = parseInt(document.getElementById("num3_2").value);
  var num3 = parseInt(document.getElementById("num3_3").value);
  var resultado1 = document.getElementById('resultadomayorymenor3numtexto');
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    resultado1.innerText = "Por favor, ingrese números válidos en los tres campos.";
    return;
  }
  var mayor = Math.max(num1, num2, num3);
  var menor = Math.min(num1, num2, num3);
  resultado1.innerText = "El mayor número es: " + mayor + ". El menor número es: " + menor + ".";
}


//sumar o restar //
document.getElementById('openModalVerificacion4').addEventListener('click', function() {
  document.getElementById('modalVerificacion4').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}

function sumarORestar() {
  var numA = parseInt(document.getElementById('numA').value);
  var numB = parseInt(document.getElementById('numB').value);
  var resultadoElemento = document.getElementById('resultadoSumaroRestar');

  if (isNaN(numA) || isNaN(numB)) {
    resultadoElemento.innerText = "por favor, ingrese numeros validos";
    return;
  }
  else if (numA < numB) {
   resultadoElemento.innerText = "La resta de " + numA + " y " + numB + " es: " + (numA - numB);
}
else if (numA > numB){
  resultadoElemento.innerText = "La suma de " + numA + " y " + numB + " es: " + (numA + numB);
}

 }





 
 //division de dos nuemeros//
 document.getElementById('openModalVerificacion5').addEventListener('click', function() {
  document.getElementById('modalVerificacion5').style.display = 'block';
});

var cerrarButtons = document.getElementsByClassName('cerrar');
for (let i = 0; i < cerrarButtons.length; i++) {
  cerrarButtons[i].addEventListener('click', function() {
      this.parentElement.parentElement.style.display = 'none';
  });
}
function divisionDosNumeros() {
  var numA = parseInt(document.getElementById('numA').value);
  var numB = parseInt(document.getElementById('numB').value);
  var resultadoDivisionElemento = document.getElementById('resultadoDivision');

  // Verifica si los números son válidos
  if (isNaN(numA) || isNaN(numB)) {
    // Muestra un mensaje de error si uno o ambos números no son válidos
    resultadoDivisionElemento.innerText = "Por favor, ingrese números válidos.";
    return; // Sale de la función
  }

  // Verifica si el divisor es cero
  if (numB !== 0) {
    // Realiza la división si el divisor es diferente de cero
    var resultado = numA / numB;
    resultadoDivisionElemento.innerText = "El cociente es: " + resultado;
  } else {
    // Muestra un mensaje de error si el divisor es cero
    resultadoDivisionElemento.innerText = "La división no es posible. El denominador es cero.";
  }
}













  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  










