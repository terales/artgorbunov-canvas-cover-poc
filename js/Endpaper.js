export default class Endpaper {
  constructor ({context, viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.viewHeight = viewHeight
    this.viewWidth = viewWidth
    this.height = viewHeight
    this.width = this.height * aspectRatio
    this.marginLeft = viewWidth / 2 - this.width / 2  // centered
    this.marginTop = this.height * 0.1
    this.finalDistance = this.calcFinalDistance()

    this.allAssetsLoaded = Promise.all([
      this.loadMaterial(aspectRatio)
    ])
  }

  render (scroll) {
    this.context.drawImage(
      this.materialImg,
      0,
      0,
      this.width,
      this.height
    )
  }

  loadMaterial (aspectRatio) {
    const sourceImg = new Image()
    sourceImg.src = '/cover/endpaper.png'

    return new Promise(resolve => {
      sourceImg.addEventListener('load', () => {
        this.materialImg = new Image()
        this.materialImg.src = this.cropImage(sourceImg, aspectRatio)
        resolve()
      }, { once: true })
    })
  }

  calcFinalDistance () {
    const perspective = 3500
    const scale = this.viewWidth / (2 * this.width - 1)
    return perspective * (scale - 1) / scale
  }

  /**
   * Crops image to the desired aspect ratio
   * @param {CanvasImageSource} options.image
   * @param {Number} options.aspectRatio
   * @returns {String} Data URL of the cropped image 
   */
  cropImage (image, aspectRatio) {
    const cropCanvas = document.createElement('canvas')
    const height = image.naturalHeight
    const width = image.naturalHeight * aspectRatio    
    cropCanvas.width = width
    cropCanvas.height = height
    cropCanvas.getContext('2d').drawImage(image, 0, 0, width, height, 0, 0, width, height)
    return cropCanvas.toDataURL('image/png')
  }
}