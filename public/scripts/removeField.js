document.querySelector('#rm-time')
.addEventListener('click', removeField)

function removeField() {
    const containers = document.querySelectorAll('.schedule-item') // selecting all the items

    if (containers.length == 1) {
        return
    }
    else {
        document.querySelector('#schedule-items').removeChild(containers[containers.length - 1])
    }
}