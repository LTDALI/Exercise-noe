const panels = document.querySelectorAll('.panel');

panels.forEach(index=>{
    index.addEventListener('click',()=>{
        remvoeActive();
        index.classList.add('active')
    })
})

function remvoeActive() {
    panels.forEach((index)=>{
        index.classList.remove('active')
    })
}
console.log(panels)
