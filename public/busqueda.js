let imagenes; 


fetch('/api/imagenes') 
  .then(response => response.json())
  .then(data => {
    imagenes = data; 
  })
  .catch(error => {
    console.error('Error al obtener las imágenes:', error);
  });
  console.log(imagenes)

const inputBusqueda = document.getElementById('valor');
console.log(inputBusqueda)
inputBusqueda.addEventListener('keyup', () => {
    const valorBusqueda = inputBusqueda.value.toLowerCase();
    const criterio = document.getElementById('criterio').value; 
    console.log(valorBusqueda)
    console.log(criterio)
    const resultados = buscarEnDatos(valorBusqueda, imagenes, criterio);
    
    mostrarDatos(resultados);
  });

function buscarEnDatos(valor, datos, criterio) {
    return datos.filter(imagen => {
      const titulo = imagen.Publicacion.titulo.toLowerCase();
      const descripcion = imagen.Publicacion.descripcion.toLowerCase();
  
      switch (criterio) {
        case 'titulo':
          return titulo.indexOf(valor) !== -1;
        case 'descripcion':
          return descripcion.indexOf(valor) !== -1;
      
      }
    });
  }


function mostrarDatos(resultados) {
    const div = document.getElementById('resultados');

    div.innerHTML = '';

    resultados.forEach(imagen => {
        div.innerHTML += `
            <a href='/imagen/${imagen.id}'</a>
            <img src="/${imagen.urlImagen}" width="200", height= "200"> </a>
            <p style=" color: white">${imagen.Publicacion.titulo}</p>
            
        `;
    });
}

    
