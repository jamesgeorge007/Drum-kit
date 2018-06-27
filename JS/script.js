let buttons = document.getElementsByTagName('button')
let sounds = document.getElementsByTagName('audio')
let size = sounds.length
let index
document.addEventListener('keydown', (event) => {
  for(i = 0; i < size; i++){
     if(sounds[i].getAttribute('data-key') == event.keyCode){
       buttons[i].classList = 'btn btn-tapped';
       sounds[i].play()
       index = i
    }
  }
})
document.addEventListener('keyup', () => {
  buttons[index].classList = 'btn'
})
