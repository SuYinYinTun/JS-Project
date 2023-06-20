var val;

//add
document.querySelector('form').addEventListener('submit',function(e){
    e.preventDefault();
    // console.log("hello");

    var newtask;
    // console.log(newtask);
    var lists= document.getElementsByTagName("li");

    if (newtask = document.getElementById("task").value){
        lists[0].innerHTML=newtask + "<i class='fas fa-trash-alt rc1'>";

    }



});

//delete

document.body.addEventListener("click",xyz);

function xyz(e){
    //console.log("I am body");

    if(e.target.className === "fas fa-trash-alt rc1"){
        //console.log("I am trash");
        e.target.parentElement.parentElement.remove(); 

    }
}

document.body.addEventListener("click",clear);

function clear(e){
    //console.log("I am body");

    if(e.target.className === "clear-tasks"){
        //console.log("I am trash");
        e.target.parentElement.remove(); 

    }
}
