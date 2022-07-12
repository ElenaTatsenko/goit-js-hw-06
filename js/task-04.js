const addBtn = document.querySelector('button[data-action="increment"]');
const removeBtn = document.querySelector('button[data-action="decrement"]');
const counterRef = document.querySelector("#value")


let counterValue = counterRef.textContent = 0;

addBtn.addEventListener('click', () => {
    counterValue += 1;
    counterRef.innerHTML = counterValue;
})
removeBtn.addEventListener('click', () => {
    counterValue -= 1;
    counterRef.innerHTML = counterValue;
})
