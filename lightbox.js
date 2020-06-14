const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(Imagen =>{
  Imagen.addEventListener('click', ()=>{
    aparecerImagen(Imagen.getAttribute('src'))
  })
})


contenedorLight.addEventListener('click', (e)=>{
  if(e.target !== imagenesLight){
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
  }
})


const aparecerImagen = (iamgen)=>{
  imagenesLight.src = iamgen;
  contenedorLight.classList.toggle('show')
  imagenesLight.classList.toggle('showImage')
}