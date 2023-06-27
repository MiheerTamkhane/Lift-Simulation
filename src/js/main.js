const allUpButtons = document.querySelectorAll('.up')
const allDownButtons = document.querySelectorAll('.down')
const liftOne = document.querySelector('.lift1')
console.log(allUpButtons)
allUpButtons.forEach((button, index) => {
    button.addEventListener('click',(e) => {
        console.log(e.target.dataset.up)
        console.log(+e.target.dataset.up / 100, index)
        liftOne.style.transform = 'translateY(' + -Number(e.target.dataset.up) + '%)';
        liftOne.style.transition = 'all ' + (+e.target.dataset.up / 100) + 's linear'; 
    })
})