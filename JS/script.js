let buttons = document.getElementsByClassName('btn')
let confirmBtn = document.getElementById('confirm-btn')
let popUp = document.getElementsByTagName('div')[0]
let wrapper = document.getElementsByTagName('div')[1]
let sounds = document.getElementsByTagName('audio')
let size = sounds.length
let index
window.onload = () => {
  /* wrapper.classList = 'wrapper display-none'
  popUp.classList = 'pop-up display-block' */
  wrapper.style.display = 'none'
  popUp.style.display = 'block'
}
confirmBtn.addEventListener('click', () => {
/*  wrapper.classList = 'wrapper display-block'
  popUp.classList = 'pop-up display-none' */
  wrapper.style.display = 'block'
  popUp.style.display = 'none'
})
 window.addEventListener('resize', () => {
    if (window.matchMedia('(max-width: 1200px)').matches) {
        wrapper.style.display = 'none'
    } else{
      wrapper.style.display = 'block'
    }
})
document.addEventListener('keydown', (event) => {
  for(let i = 0; i < size; i++){
     if(sounds[i].getAttribute('data-key') == event.keyCode){
       buttons[i].classList = 'btn btn-tapped'
       sounds[i].play()
       index = i
    }
  }
})
document.addEventListener('keyup', () => {
  buttons[index].classList = 'btn'
})
