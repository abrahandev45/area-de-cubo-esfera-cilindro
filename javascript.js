


var item =  Array.prototype.slice.apply(document.querySelectorAll('.item'));
var panels = Array.prototype.slice.apply(document.querySelectorAll('.column-50'));

var link = document.getElementById('link').addEventListener('click',function(e){
    
    if(e.target.classList.contains('item')) {
       

       let i = item.indexOf(e.target);
        
        item.map(ite => ite.classList.remove('active'));
        item[i].classList.add('active');

        panels.map(panel => panel.classList.remove('active'));
        panels[i].classList.add('active');

    }
});

//operaciones

const cilindro = document.querySelector('.cilindro');
const esfera = document.querySelector('.esfera');
const cubo = document.querySelector('.cubox');


cilindro.addEventListener('click',function(e){

    var altura = parseFloat(document.getElementById('altura').value);
    var radio = parseFloat(document.getElementById('radio').value);
    var pi = 3.1416;
    e.preventDefault();

    document.getElementById('cilinresultado').innerHTML = pi * (radio * radio)* altura;
    
    })


    esfera.addEventListener('click',function(e){

        var ciradio = parseFloat(document.getElementById('ciradio').value);
        var pi = 3.1416;
        e.preventDefault();
       
        document.getElementById('esferesultado').innerHTML = 4/3 * pi *(ciradio * ciradio * ciradio);
        })

    cubo.classList.toggle('cubomostrar');

        cubo.addEventListener('click',function(e){
            e.preventDefault();
            var cubolado = parseInt(document.getElementById('cubolado').value)
            document.getElementById('cuboresultado').innerHTML = 6 * (cubolado * cubolado);
        })




