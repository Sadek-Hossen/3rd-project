let btnLight = document.getElementById("btnLight")
btnLight.addEventListener("click",()=>{

    let body = document.querySelector("body")
    body.style.backgroundColor="white";
    body.style.color="black";
    btnLight.style.color="white";
    nightMode.style.color = "black"
});

let nightMode = document.getElementById("nightMode");

nightMode.addEventListener("click",()=>{
    let body = document.querySelector("body");
    body.style.backgroundColor ="black";
    body.style.color = "white"
    nightMode.style.color="white";
    btnLight.style.color="black"
})
