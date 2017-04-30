import BookPosition from './BookPosition'
import Face from './Face'
import Endpaper from './Endpaper'

const COVER_COLOR = '#fc5620'
const ASPECT_RATIO = 0.71

init()

function init () {
  const width = window.innerWidth
  const height = window.innerHeight

  console.log(width, height)

  const canvases = document.querySelectorAll('.cover canvas')
  const contexts = {}
  canvases.forEach(canvas => {
    canvas.width = width
    canvas.height = height
    contexts[canvas.className] = canvas.getContext('2d')
  })

  const options = {
    viewWidth: width,
    viewHeight: window.innerHeight,
    aspectRatio: ASPECT_RATIO
  }

  const bookPosition = new BookPosition(contexts, options)
  const face = new Face(contexts['face'], options)
  const endpaper = new Endpaper(contexts['rightendpaper'], options)

  const enchancedRender = render.bind({
    contexts,
    width,
    height,
    face,
    endpaper,
    bookPosition
  })

  face.allAssetsLoaded.then(startRendering.bind(null, enchancedRender))
}

function startRendering (enchancedRender) {
  window.requestAnimationFrame(enchancedRender)
  window.addEventListener('scroll', event => {
    const scroll = getScrollPercentage(window.pageYOffset)
    if (scroll < 1) {
      window.requestAnimationFrame(enchancedRender)
    }
  })
}

function render () {
 /**
  * @todo #4/DEV Remove duplication of scroll calculation
  */
  const scroll = 1 - getScrollPercentage(window.pageYOffset)

  Object.keys(this.contexts).forEach(name => {
    clearCanvas(this.contexts[name], this.width, this.height)
  })
  this.bookPosition.setTopLeftPosition(scroll)

  this.endpaper.render(scroll)
  // this.face.render(scroll)
}

function clearCanvas (context, width, height) {
  context.setTransform(1, 0, 0, 1, 0, 0)
  context.clearRect(0, 0, width, height)
}

function getScrollPercentage (scrollOffset) {
  return scrollOffset / 500 // scroll within 500px will trigger animation
}
