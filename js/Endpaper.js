import LogarithmicScale from './LogarithmicScale'

export default class Endpaper {
  constructor ({context, viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.viewHeight = viewHeight
    this.viewWidth = viewWidth
    this.height = viewHeight
    this.width = this.height * aspectRatio
    this.marginLeft = viewWidth / 2 - this.width / 2  // centered
    this.marginTop = this.height * 0.1
    this.zoomScale = this.setUpZoomScale()

    this.allAssetsLoaded = Promise.all([
      this.loadMaterial(aspectRatio)
    ])
  }

  render (scroll) {
   /**
    * @todo #5/DEV After very fast scroll
    *  there is a gap between right edge of the endpaper
    *  and right side of the screen
    */
    const zoom = this.zoomScale.value(scroll)
    this.context.transform(zoom, 0, 0, zoom, 0, 0)

    this.context.drawImage(
      this.materialImg,
      0,
      0,
      this.width,
      this.height
    )
  }

  setUpZoomScale () {
    return new LogarithmicScale({
      minPos: 1,
      maxPos: 0,
      minVal: 1,
      maxVal: 1.44
    })
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