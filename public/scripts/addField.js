document.querySelector('#add-time')
.addEventListener('click', clonefield)

// executar uma acao
function clonefield() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    fields.forEach( (field) => {
        field.value = ""
    })

    // colocar na pagina
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}