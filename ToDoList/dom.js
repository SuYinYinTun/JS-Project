var val;

document.body.addEventListener("click",xyz);

function xyz(e){
    console.log("I am body");

    if(e.target.className === "fas fa-trash-alt"){
        console.log("I am trash");

    }

     e.target.parentElement.parentElement.remove(); 

};
