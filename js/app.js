

const scrollContainer = document.querySelector(".proyectos_contenedor");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
}); 
let link = document.querySelector('.link_arriba')


link.onClick = (e)=>{
    e.preventDefault();
    window.scroll({
        top: 0,
        left: 100,
        behavior:'smooth',
      },800)


}




 