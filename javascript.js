
const btncilindro = document.getElementById('btncilindro');
const btnesfera = document.getElementById('btnesfera');
const btncubo = document.getElementById('btncubo');
const cilin =document.querySelector('#cilin');
const esfer = document.querySelector('#esfer');
const cubi = document.querySelector('#cubo');


btncilindro.addEventListener('click',function(){
    cilin.classList.toggle('cilinmostrar');
})

btnesfera.addEventListener('click',function(){
    esfer.classList.toggle('esfermostrar');
})
btncubo.addEventListener('click', function(){
    cubi.classList.toggle('cubomostrar');
})



const cilindro = document.querySelector('.cilindro');
const esfera = document.querySelector('.esfera');
const cubo = document.querySelector('.cubo');


cilindro.addEventListener('click',function(e){
    e.preventDefault();
    var radio = parseFloat(document.getElementById('radio').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    var pi = 3.1416;
    
     /*resultado.innerHTML = pi * (radio * radio) * altura;*/
     document.getElementById('resultado').innerHTML = pi * (radio * radio) * altura; 
   
})

esfera.addEventListener('click',function(e){

 var ciradio = parseFloat(document.getElementById('ciradio').value);
 var pi = 3.1416;
 e.preventDefault();

 document.getElementById('esferesultado').innerHTML = 4/3 * pi *(ciradio * ciradio * ciradio);
  
})

cubo.addEventListener('click',function(e){

    e.preventDefault();
    var cubolado = parseInt(document.getElementById('cubolado').value)
    document.getElementById('cuboresultado').innerHTML = 6 * (cubolado * cubolado);

}) 



  

// TAREA DE CASOS

/*var numero1 = 5;
var numero2 = 8;

if(numero1 >! numero2 && numero2 > 0){
    alert('numero'+' '+ numero1 +' no es mayor que'
     + ' ' + numero2 + ' y' + ' '+ numero2 + ' ' + ' es positivo')
}

if( (numero1 < 0 || numero1 != 0)){
    var numerot = numero1+1;
    alert('el numero'+' '+ numero1 + ' ' + 
    'es negativo o distinto de 0  e incrementar en unidad al valor '
    + numerot + ' no lo hace mayor ó igual que numero' +' '+ numero2)
    
}*/

// TAREA DE MENUS



