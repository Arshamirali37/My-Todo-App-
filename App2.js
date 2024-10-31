var ulElement = document.getElementById("list")

function addTodo() {
    var input = document.getElementById("todoInput")
    
    if (input.value) {
        var liElement = document.createElement('li');

        var liText = document.createTextNode(input.value)

        liElement.appendChild(liText)

        list.appendChild(liElement)

        input.value = " "
    } 
    
    else {
        alert("🚨Enter Field..🚨")
    }
}


// DELETE BUTTON
function deleteAllTodos() {
    ulElement.innerHTML=" "
}