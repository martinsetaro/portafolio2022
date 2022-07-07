let link = document.querySelector('.link_arriba')


link.addEventListener('click', (e)=>{
    e.preventDefault()
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
)




const scrollContainer = document.querySelector(".proyectos_contenedor");

scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
}); 






 