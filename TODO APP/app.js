const btn = document.querySelector('#button');
const list = document.querySelector('.list');
const inp = document.querySelector('#input');

function addTask(){
    const tasktext=inp.value.trim();

    if(tasktext==''){
        return;
    }

    const li=document.createElement('li');
    li.textContent=tasktext;

    list.appendChild(li);
    inp.value='';
    inp.focus();
}

btn.addEventListener('click',addTask);

inp.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        addTask();
    }
});

list.addEventListener("click", function (event) {
    if (event.target.tagName == 'LI') {
        event.target.remove();
    }
});
