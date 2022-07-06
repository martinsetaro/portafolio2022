
let header = document.getElementById("miHeader");

window.addEventListener('scroll',()=>{
    let scroll = window.pageYOffset;
    if(scroll == 0){
        
        header.style.background = "transparent";

        
    }else{
        header.style.position = "sticky";
        header.style.top = "0";
        header.style.background = "rgba(0,0,0,0.9)";
    }
})




 