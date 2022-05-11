const sumar = () => {
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    if(!numero1 || !numero2){
        alert("Introduce numeros");
    }else{
        let sumar = numero1+numero2;
        alert(`El resultado de la suma es: ${sumar}`);
    }
}

const restar = () => {
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    if(!numero1 || !numero2){
        alert("Introduce numeros");
    }else{
        let resta = numero1-numero2;
        alert(`El resultado de la resta es: ${resta}`);
    }
}

const multiplicar = () => {
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    if(!numero1 || !numero2){
        alert("Introduce numeros");
    }else{
        let multiplicacion = numero1*numero2;
        alert(`El resultado de la resta es: ${multiplicacion}`);
    }
}

const dividir = () => {
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    if(!numero1 || !numero2){
        alert("Introduce numeros");
    }else{
        let division = numero1-numero2;
        alert(`El resultado de la resta es: ${division}`);
    }
}

const porcentual = () => {
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    if(!numero1 || !numero2){
        alert("Introduce numeros");
    }else{
        let porcentaje = (numero1*numero2)/100;
        alert(`El ${numero2}% de ${numero1} es: ${porcentaje}`);
    }
}

const radical = () => {
    let numero1 = parseInt(document.getElementById('num1').value);
    let numero2 = parseInt(document.getElementById('num2').value);
    if(!numero1 && !numero2){
        alert("Introduce un numero");
    }else if(numero1 && numero2){
        let suma = numero1+numero2;
        let raizSuma = Math.sqrt(suma);
        alert(`La raiz cuadrada de ${suma} es: ${raizSuma}`);
    }else if(!numero1 && numero2){
        let raizNum2 = Math.sqrt(numero2);
        alert(`La raiz cuadrada de ${numero2} es: ${raizNum2}`);
    }else if(numero1 && !numero2){
        let raizNum1 = Math.sqrt(numero1);
        alert(`La raiz cuadrada de ${numero1} es: ${raizNum1}`);
    }
}