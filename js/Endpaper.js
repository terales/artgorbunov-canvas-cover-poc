export default class Endpaper {
  constructor ({context, viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.height = viewHeight
    this.width = this.height * aspectRatio
    this.marginLeft = viewWidth / 2 - this.width / 2  // centered
    this.marginTop = this.height * 0.1

    this.allAssetsLoaded = Promise.all([
      this.loadMaterial()
    ])
  }

  render (scroll) {
    const step = 2 - scroll
    const left = step * this.marginLeft
    const top = step * this.marginTop

    this.context.setTransform(1, 0, 0, 1, left, top)

    this.context.drawImage(
      this.materialImg,
      0,
      0,
      this.width,
      this.height
    )
  }

  loadMaterial () {
    this.materialImg = new Image()    
    this.materialImg.src = '/cover/endpaper.png'

    return new Promise(resolve => {
      this.materialImg.addEventListener('load', resolve, { once: true })
    })
  }
}