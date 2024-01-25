import * as actions from "./actions.js"
import * as el from './elements.js'
import state from "./state.js"
import { updateDisplay } from "./timer.js"

export function registerControls() {
  el.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return
    }

    actions[action]()
    
  })
}

export function registerSounds() {
  el.sounds.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if(typeof actions[action] != "function") {
      return 
    }

    actions[action]()
     
  }) 
}

  export function setMinutes() {
    el.minutes.addEventListener('focus', () => {
      el.minutes.textContent = ''
    
    })

    el.minutes.onkeypress = (event) => /\d/.test(event.key) 
          /**
           * verifica o que foi digitado. Se número, verdadeiro (aceita), 
           * qualquer outro caracter falso e não aceita
          */
    
    el.minutes.addEventListener('blur', (event)=> {
      let timer = event.currentTarget.textContent
       
      timer = timer > 60 ? 60 : timer


      state.minutes = Number(timer)
      state.seconds = 0

      updateDisplay()
      el.minutes.removeAttribute('contenteditable')

    })

  } 

  export function btnsCardsSelect(){
    btnForest.classList.toggle('music-on')
    btnRain.classList.toggle('music-on')
    btnCoffe.classList.toggle('music-on')
    btnFire.classList.toggle('music-on') 
  } 
  
    