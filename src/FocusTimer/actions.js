import state from './state.js'
import * as timer from './timer.js' 
import * as el from './elements.js' 
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  timer.countdown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function set() {
  el.minutes.setAttribute('contenteditable', true)
  el.minutes.focus()
}

export function plusButton() {
  if(state.minutes > 55){
    return  
  } 
  state.minutes = state.minutes + state.addDecMinutes
  timer.updateDisplay()
}

export function minusButton() {
  if(state.minutes <= 5){
    return
  }
  state.minutes = state.minutes - state.addDecMinutes
  timer.updateDisplay()
}

export function btnForest() {

  sounds.btnForest.classList.toggle('music-on')

    if (sounds.btnForest.classList.contains('music-on')) {
      sounds.forest.play()
      sounds.rain.pause()
      sounds.coffee.pause()
      sounds.fire.pause()
      
      sounds.btnRain.classList.remove('music-on')
      sounds.btnCoffe.classList.remove('music-on')
      sounds.btnFire.classList.remove('music-on')

    } else {
      sounds.forest.pause()
    }
}

export function btnRain() {
  
  sounds.btnRain.classList.toggle('music-on')

    if (sounds.btnRain.classList.contains('music-on')) {
      sounds.forest.pause()
      sounds.rain.play()
      sounds.coffee.pause()
      sounds.fire.pause()
      
      sounds.btnForest.classList.remove('music-on')
      sounds.btnCoffe.classList.remove('music-on')
      sounds.btnFire.classList.remove('music-on')
    
    } else {
      sounds.rain.pause()
      
    }
}

export function btnCoffe() {

  sounds.btnCoffe.classList.toggle('music-on')

    if (sounds.btnCoffe.classList.contains('music-on')) {
      sounds.forest.pause()
      sounds.rain.pause()
      sounds.coffee.play()
      sounds.fire.pause()
      
      sounds.btnForest.classList.remove('music-on')
      sounds.btnRain.classList.remove('music-on')
      sounds.btnFire.classList.remove('music-on')

    } else {
        sounds.coffee.pause()
    }
  
}

export function btnFire() {
  
  sounds.btnFire.classList.toggle('music-on')

  if (sounds.btnFire.classList.contains('music-on')) {
    sounds.forest.pause()
    sounds.rain.pause()
    sounds.coffee.pause()
    sounds.fire.play()
    
    sounds.btnForest.classList.remove('music-on')
    sounds.btnRain.classList.remove('music-on')
    sounds.btnCoffe.classList.remove('music-on')

  } else {
      sounds.fire.pause()
  }

}