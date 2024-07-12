
function loadData(){
    const xhr=new XMLHttpRequest();
    xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
    xhr.onload=function(){
        if(xhr.status>=200 && xhr.status<300){
            console.log(xhr.response);
        }
    }
    xhr.send();
}

const container=document.getElementsByClassName("container")[0];


const deletebtn=document.createElement("button");
deletebtn.textContent="button";
deletebtn.type="submit";
document.body.appendChild(deletebtn);

let existingparagraph=container.querySelector("p");
deletebtn.addEventListener('click',function(){
    container.removeChild(existingparagraph);
})
const newParagraph=document.createElement("p");
newParagraph.textContent="New paragraph";
container.appendChild(newParagraph);
