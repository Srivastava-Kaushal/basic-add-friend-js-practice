const isstatus=document.querySelector("h5");
const btn=document.querySelector("#add");
let check=0;



btn.addEventListener("click",function(){
    if(check===0){
        isstatus.innerText="Friends";
        isstatus.style.color="green";
        btn.innerText="Remove Friend";
        btn.classList.add("remove");
        check=1;
    }
    else{
        isstatus.innerText="Stranger";
        isstatus.style.color="red";
        btn.innerText="Add Friend";
        btn.classList.remove("remove");

        check=0;
    }

})