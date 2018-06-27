let buttons = document.querySelectorAll('btn-group')
let sounds = document.getElementsByTagName('audio')

document.addEventListener('keydown', (event) => {
  for(let audio of sounds){
     if(audio.getAttribute('data-key') == event.keyCode){
      audio.play()
    }
  }
})
