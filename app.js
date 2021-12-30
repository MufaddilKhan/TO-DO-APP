var todoinput = document.getElementById('todoinput')
var parent = document.getElementById('todoListParent')

function addTodo() {
    var inpValue = todoinput.value
    var todoLi = document.createElement('li')
    todoLi.setAttribute('class', 'listStyle')
    var finalTextValue = document.createTextNode(inpValue)
    todoLi.appendChild(finalTextValue)

    parent.appendChild(todoLi)

    var deleteBtn = document.createElement('button')
    var deltTxt = document.createTextNode('DELETE')
    deleteBtn.setAttribute('onclick', 'deleteTodo(this)')
    deleteBtn.setAttribute('class', 'btn')

    deleteBtn.appendChild(deltTxt)
    todoLi.appendChild(deleteBtn)

    var editBtn = document.createElement('button')
    var editTxt = document.createTextNode('EDIT')
    editBtn.setAttribute('onclick', 'editTodo(this)')
    editBtn.setAttribute('class', 'btn')

    editBtn.appendChild(editTxt)
    todoLi.appendChild(editBtn)





    todoinput.value =""
}

function deleteTodo(element) {
    element.parentNode.remove()

}
function editTodo(element) {
    element.parentNode.firstChild.nodeValue = prompt("Enter Edit Value")

}
function deleteall(){

    parent.innerHTML=""

}
