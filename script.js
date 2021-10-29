
const testButton = document.querySelector(".btn"); 
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");


function showModal (e){
    e.preventDefault(); 
    modal.style.display="block"; 
}

const hideModal = ()=> {
    modal.style.display="none"; 
}


testButton.addEventListener("click", showModal); 
close.addEventListener("click", hideModal);
modal.addEventListener("click", hideModal);

