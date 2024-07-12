const element = document.createElement("img");
element.src = "brucelee.jfif";
element.alt = "brucelee";
element.width = 53;
element.height = 70;
document.body.appendChild(element);

console.log("hi");

const element1 = document.getElementById('myid');
element1.innerHTML = "<h1>hello</h1>";

// Corrected code
const te = document.getElementsByClassName("myclass");

for (let i = 0; i < te.length; i++) {
    te[i].computedStyleMap.border = "bell";
}
const ele=document.querySelectorAll(".myclass");
for(let i=0;i<ele.length;i++){
    ele[i].textContent="hey";
}
const db=document.createElement("button");
db.textContent="Subscribe";
document.body.appendChild(db);
db.addEventListener('click',function(){
    db.textContent="Subscribed";
})
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