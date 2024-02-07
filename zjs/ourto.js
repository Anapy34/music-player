const steps = {
  'reduced': {
    'player': 'player player--reduced player--bottom',
    'suggestions': 'suggestions suggestions--reduced'
  },
  'playing': {
    'player': 'player',
    'suggestions': 'suggestions suggestions--reduced'
  },
  'suggestions': {
    'player': 'player player--reduced',
    'suggestions': 'suggestions'
  }
}
const player = document.getElementById('player')
const suggestions = document.getElementById('suggestions')
const thumb = document.getElementById('thumb')
const small = document.getElementById('small')

var actual_ui = null
const ui = function(step) {
  player.className = steps[step].player
  suggestions.className = steps[step].suggestions
  actual_ui = step
}

var walker_player1 = new CSSTransitionWalker(player)
var walker_thumb1 = new CSSTransitionWalker(thumb)
ui('reduced')
walker_player1.captureInitialState()
walker_thumb1.captureInitialState()
ui('playing')
walker_player1.captureFinalState()
walker_thumb1.captureFinalState()

var walker_player2 = new CSSTransitionWalker(player)
var walker_thumb2 = new CSSTransitionWalker(thumb)
var walker_suggestions2 = new CSSTransitionWalker(suggestions)
walker_player2.captureInitialState()
walker_thumb2.captureInitialState()
walker_suggestions2.captureInitialState()
ui('suggestions')
walker_player2.captureFinalState()
walker_thumb2.captureFinalState()
walker_suggestions2.captureFinalState()
ui('reduced')

go1 = function(value) {
  walker_thumb1.goTo(value)
  walker_player1.goTo(value)
}

go2 = function(value) {
  walker_thumb2.goTo(value)
  walker_player2.goTo(value)
  walker_suggestions2.goTo(value)
}

release1 = function(value) {
  walker_player1.release()
  walker_thumb1.release()
  if (value > 0.5) {
    ui('playing')
  } else {
    ui('reduced')
  }
}

release2 = function(value) {
  walker_player2.release()
  walker_thumb2.release()
  walker_suggestions2.release()
  if (value > 0.5) {
    ui('suggestions')
  } else {
    ui('playing')
  }
}

var _y = null
var _value = null
const panstart = e => {
  _y = e.touches[0].clientY
}

const panmove = (fx, e) => {
  var _off = _y - e.touches[0].clientY
  let value = _off / window.innerHeight
  value = value > 1 ? 1 : value
  value = value < 0 ? 1 + value : value
  _value = value
  fx(_value)
}

const panend = (fx, e) => {
  fx(_value)
}

player.addEventListener('touchstart', panstart)
player.addEventListener('touchmove', e => {
  panmove(go1, e)
})
player.addEventListener('touchend', e => {
  panend(release1, e)
})
thumb.addEventListener('click', () => {
  if(actual_ui !== 'playing') {
    ui('playing')
  } else {
    ui('reduced')
  }
})

// const player = document.getElementById('player')
// const suggestions = document.getElementById('suggestions')

// const small = document.getElementById('small')

suggestions.addEventListener('touchstart', panstart)
suggestions.addEventListener('touchmove', e => {
  e.stopPropagation()
  panmove(go2, e)
})
suggestions.addEventListener('touchend', e => {
  e.stopPropagation()
  panend(release2, e)
})
suggestions.addEventListener('click', e => {
  e.stopPropagation()
  if(actual_ui === 'suggestions') {
    ui('playing')
  } else {
    ui('suggestions')
  }
})

