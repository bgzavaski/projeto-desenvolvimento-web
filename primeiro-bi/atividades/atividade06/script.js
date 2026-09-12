const input = document.getElementById("tarefa");
const botao = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista");

botao.addEventListener("click", function() { 

    const textoTarefa = input.value.trim();

    if (textoTarefa === "") { // não permite adicionar tarefas vazias
        return; 
    }
    
    const li = document.createElement("li");     
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    
    const span = document.createElement("span");
    span.textContent = input.value; 

    li.appendChild(checkbox); 
    li.appendChild(span);
    
    listaTarefas.appendChild(li);
    
    input.value = ""; 
    
});

listaTarefas.addEventListener("click", function(event) { 
    
    if (event.target.tagName === "INPUT"
        && event.target.type === "checkbox") {
        const span = event.target.parentElement.querySelector("span");
        span.classList.toggle("concluida");
    }
    if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove(); // remove o li inteiro (é o pai do span, todo o conteúdo da tarefa está dentro dele)
    }
}) 