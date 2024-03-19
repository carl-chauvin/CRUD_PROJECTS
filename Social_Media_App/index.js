//Creamos las variables

let form = document.getElementById("form")
let input = document.getElementById("input")
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

//creamos un event listener para evitar el comportamiento predeterminado y creamos una funcion "Form"
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked")

    formValidation()
})

// En la funcion incluimos una validacion de los datos introducidos
let formValidation = () => {
    if (input.value === ""){
        msg.innerHTML = "Post cannot be blank"
        console.log("failure")
    }
    else {
        console.log("success")
        msg.innerHTML = ""
        acceptData()
    }
}

//Creamos la variable data para guardar los datos ingresados
let data = {}


let acceptData = () => {
    data["text"] = input.value
    console.log(data)
    createPost()
}

// la funcion createPost para agregar datos
let createPost = () => {
    posts.innerHTML +=` <div>
    <p>${data.text} </p>
    <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
</div>` 
} //los (``) son template literals


//la funcion deletePost para borrar datos
let deletePost = (e) => {
    e.parentElement.parentElement.remove()
}

//la funcion editPost para actualizar datos
let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML
    e.parentElement.parentElement.remove()
}