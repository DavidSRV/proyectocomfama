const menu = document.getElementById("menu");

//Evento a detectar = Scroll

window.addEventListener("scroll",()=>{
    if (document.documentElement.scrollTop>=100) {
        menu.classList.add("menu2")
        menu.classList.remove("menu")   
    } else{
        menu.classList.remove("menu2")
        menu.classList.add("menu") 
    }
})

