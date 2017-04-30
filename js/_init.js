import BookPosition from './BookPosition'
import Face from './Face'
import Endpaper from './Endpaper'

const COVER_COLOR = '#fc5620'
const ASPECT_RATIO = 0.71

init()

function init () {
  const canvas = document.querySelector('.cover')
  const context = canvas.getContext('2d')
  const width = canvas.scrollWidth
  const height = canvas.scrollHeight
  canvas.width = width
  canvas.height = height

  const options = {
    context,
    viewWidth: width,
    viewHeight: window.innerHeight,
    aspectRatio: ASPECT_RATIO
  }

  const bookPosition = new BookPosition(options)
  const face = new Face(options)
  const endpaper = new Endpaper(options)

  const enchancedRender = render.bind({
    canvas: canvas,
    context,
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

  this.context.clearRect(0, 0, this.width, this.height)
  this.bookPosition.setTopLeftPosition(scroll)
  this.context.save()

  this.endpaper.render(scroll)
  this.context.restore()

  this.face.render(scroll)
}

function getScrollPercentage (scrollOffset) {
  return scrollOffset / 500 // scroll within 500px will trigger animation
}
