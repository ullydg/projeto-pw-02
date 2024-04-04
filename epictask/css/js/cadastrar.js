document.querySelector("#botao-cadastrar").addEventListener("click", (e)=>{
    e.preventDefault()

    const form = document.querySelector("form")


    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        score: form.score.value
    }

    validar(tarefa)
    console.log(tarefa)

    const titulo = form.titulo.value
    const descricao = form.descricao.value
    const score = form.score.value

    console.log(titulo, descricao, score)

})

function validar(tarefa){

    limparErros()

    if(tarefa.titulo === ""){
    document.querySelector("#titulo").classList.add("is-erro")
       document.querySelector("#titulo-error").innerText = "O título é obrigatório!"
    }

    if(tarefa.descricao === ""){
        document.querySelector("#descricap").classList.add("is-error")
        document.querySelector("#descricao-error").innerText = "A descrição é obrigatória!"
    }

}

function limparErros(){

    document.querySelector("#titulo").classList.remove("is-erro")
    document.querySelector("#titulo-error").innerText = ""

}