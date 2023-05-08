let input = document.getElementById("input");
let btn = document.getElementById("btn");
let list = document.getElementById("todolist");



let todos=[];


btn.addEventListener("click", ()=>{
    todos.push(input.value)
    addtodo(input.value)
    input.value=" "
})


function addtodo(todo){
   let para =  document.createElement("p")
    para.innerText = todo

    todolist.appendChild(para)
    para.addEventListener("click",()=>{
        para.style.textDecoration = "line-through"
        remove(todo)
    })
    para.addEventListener("dblclick",()=>{
        todolist.removeChild(para)
        remove(todo)
    })

}


