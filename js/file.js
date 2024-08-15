console.log('connected')
const allBtns = document.querySelectorAll('.btn');

allBtns.forEach(btn => {
    btn.addEventListener('click', function onClick() {
        btn.style.backgroundColor = 'orange';
    })
})