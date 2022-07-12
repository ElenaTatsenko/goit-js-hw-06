const inputName = document.querySelector("#name-input");
const shownName = document.querySelector("#name-output");

inputName.addEventListener('input', onInputChange)
function onInputChange(event) {
    shownName.textContent = event.currentTarget.value || 'Anonymous'
    }


