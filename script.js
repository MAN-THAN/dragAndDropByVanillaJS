const containers = document.querySelectorAll('.container');
const items = document.querySelectorAll('.item');

items.forEach((item) => {
    item.addEventListener('dragstart', () => item.classList.add('dragging'))

})

items.forEach((item) => {
    item.addEventListener('dragend', () => item.classList.remove('dragging'))

});

containers.forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        const item = document.querySelector('.dragging');
        container.appendChild(item);
    })
})

