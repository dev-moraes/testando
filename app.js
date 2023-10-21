const input = document.getElementById('ingresar-tarefa');
const boton = document.querySelector('button');
const listaDeTarefa = document.querySelector('#lista-de-tarefa');


function agregarTarefa (){
  if(input.value){
    let tarafaNova = document.createElement('div');
    tarafaNova.classList.add('tarefa');


    let texto = document.createElement('p');
    texto.innerText = input.value;
    tarafaNova.appendChild(texto);


    //criar e agregar iconos
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tarafaNova.appendChild(iconos);


    //inonos
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarefa);


    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-x-circle', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarefa);
    
    iconos.appendChild(completar);
    iconos.appendChild( eliminar);


    //agregar a listStyleImage: 
    listaDeTarefa.appendChild(tarafaNova);
  } else {
    alert('por favor engresar uma tarefa')
  }
}

function completarTarefa (e){
  let tarefa = e.target.parentNode.parentNode;
  tarefa.classList.toggle('completada')
}

function eliminarTarefa (e) {
  let tarefa = e.target.parentNode.parentNode;
  tarefa.remove();
}

boton.addEventListener('click', agragarTarefa);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarefa();
  }
});