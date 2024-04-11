document.querySelector("#botao-cadastrar").addEventListener("click", (e) => {
    e.preventDefault()

    const form = document.querySelector("form")


    const tarefa = {
        titulo: form.titulo.value,
        descricao: form.descricao.value,
        score: form.score.value
    }

    if (validar(tarefa)){
        console.log(tarefa)
        let tarefas = JSON.parse( localStorage.getItem("tarefas")) || []
        tarefas.push(tarefa)
        localStorage.setItem("tarefas", JSON.stringify(tarefas))

        window.location = "/"


}
})

function validar(tarefa) {

    let valid = true

    limparErros()

    if (tarefa.titulo === "") {
        document.querySelector("#titulo").classList.add("is-error")
        document.querySelector("#titulo-error").innerText = "O título é obrigatório!"
        valid = false
    }

    if (tarefa.descricao === "") {
        document.querySelector("#descricao").classList.add("is-error")
        document.querySelector("#descricao-error").innerText = "A descrição é obrigatória!"
        valid = false
    }

    if (tarefa.score <= 0) {

        document.querySelector("#score").classList.add("is-error")
        document.querySelector("#score-error").innerText = "Score deve ser maior que zero!"
        valid = false
    }

    return valid

}


function limparErros() {

    document
        .querySelectorAll("nes-input.ir-error, .nes-textarea.is-error")
        .forEach(campo => campo.classList.remove("is-error"))


    document
        .querySelectorAll("span.is-error")
        .forEach(span => span.innerText = "")
}
