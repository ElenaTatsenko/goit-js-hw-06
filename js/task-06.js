const input = document.querySelector('input')
const validInputLength = Number(input.getAttribute(["data-length"]))


input.addEventListener("blur", (event) => {

    if (event.currentTarget.value.length === validInputLength) {
    event.currentTarget.classList.add('valid')
    event.currentTarget.classList.remove('invalid') 
        
    }
    else {
    event.currentTarget.classList.add('invalid')
    event.currentTarget.classList.remove('valid')
    }
    })