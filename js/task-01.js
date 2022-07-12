const categoryEl = document.querySelectorAll('.item');
console.log("Number of categoris:", categoryEl.length)

categoryEl.forEach((el) => {
    const nameElements = el.querySelector('h2').textContent;
    const numberElements = el.querySelectorAll('li').length;
    
    console.log(`Category: ${nameElements}`);
    console.log(`Elements: ${numberElements}`);
});
