var toggle = document.getElementById("menu");
var lista = document.getElementsByClassName("header-nav__li");

toggle.addEventListener('click',()=>{
    for(const item of lista){
        if(item.style.display=="none"){
            item.style.display = "flex";
        }
        else{
            item.style.display = "none";
        }
    }
})
