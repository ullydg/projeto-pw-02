console.log("carregar dados")

const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

tarefas.forEach((tarefas) => {
    const card = document.createElement("div")
    card.classList.add("nes-container", "with-title", "is-centered")

    card.innerHTML = `

    <p class="title">${tarefas.titulo}</p>
    <p>${tarefas.descricao}</p>

    <a href="#" class="nes-badge is-icon">
        <span class="is-warning"><i class="nes-icon star is-small"></i></span>
        <span class="is-primary">${tarefas.score}</span>
      </a>

    <!-- Adicionando os ganhos -->

      <progress class="nes-progress is-success" value="50" max="100"></progress>

      <!-- Adicionando os botões -->
     
          <button type="button" class="nes-btn is-error">Apagar</button>
          <button type="button" class="nes-btn is-primary">-</button>
          <button type="button" class="nes-btn is-primary">+</button>
    
    `
    document.querySelector("#lista-de-tarefas").appendChild(card)
    
})