const botoneses = document.querySelector('.compartir__logo');

const tarjeta2 = document.querySelector('.tarjeta__seccion2__autor');

const redes = document.querySelector('.social');


botoneses.addEventListener('click',()=>{
    tarjeta2.classList.toggle('noshow')
    redes.classList.toggle('show')
})