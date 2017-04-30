import Face from './Face'
import Endpaper from './Endpaper'

const COVER_COLOR = '#fc5620'
const ASPECT_RATIO = .71

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

  const face = new Face(options)

  const endpaper = new Endpaper(options)

  const enchancedRender = render.bind({
    canvas: canvas,
    context,
    width,
    height,
    face,
    endpaper
  })

  face.allAssetsLoaded.then(startRendering.bind(null, enchancedRender, height))
}

function startRendering (enchancedRender, height) {
  window.requestAnimationFrame(enchancedRender)
  window.addEventListener('scroll', event => {
    const scroll = getScrollPercentage(document.body.scrollTop, height)
    if (scroll < 1) {
      window.requestAnimationFrame(enchancedRender)
    }
  })
}

function render () {
  const scroll = 1 - getScrollPercentage(document.body.scrollTop, this.height)
  console.log('render')

  this.context.clearRect(0, 0, this.width, this.height)
  this.context.save()

  this.endpaper.render(scroll)    
  this.context.restore()

  this.face.render(scroll)
}

function getScrollPercentage (scrollTop, scrollHeight) {
  return scrollTop / scrollHeight
}
