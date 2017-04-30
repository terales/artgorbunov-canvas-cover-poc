import LogarithmicScale from './LogarithmicScale'

export default class Face {
  constructor (context, {viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.viewHeight = viewHeight
    this.viewWidth = viewWidth
    this.height = viewHeight
    this.width = this.height * aspectRatio
    this.marginLeft = viewWidth / 2 - this.width / 2  // centered
    this.marginTop = this.height * 0.1

  /**
   * @todo #2/DEV Extract image loading into separate class.
   *  Images also loaded in the ./Endpaper.js
   */
    this.allAssetsLoaded = Promise.all([
      this.loadFront(),
      this.loadFace()
    ])
  }

  render (scroll) {    
    this.drawFullImage(this.frontImg)
    this.drawFullImage(this.faceImg)
    this.drawText()
  }

  loadFront () {
    this.frontImg = new Image()    
    this.frontImg.src = '/cover/front.png'

    return new Promise(resolve => {
      this.frontImg.addEventListener('load', resolve, { once: true })
    })
  }

  loadFace () {
    this.faceImg = new Image()   
    this.faceImg.src = '/cover/face/01.png' 

    return new Promise(resolve => {
      this.faceImg.addEventListener('load', resolve, { once: true })
    })
  }

  drawFullImage (image) {
    this.context.drawImage(
      image,
      0,
      0,
      this.width,
      this.height
    )
  }

  drawText () {
    const marginLeft = Math.round(this.width * 0.08)
    this.context.fillStyle = '#fff'    
    
    this.context.font = '19px serif';
    this.context.fillText('Илья Бирман', marginLeft, Math.round(this.height * 0.72))

    this.context.font = '42px serif';
    this.context.fillText('Пользовательский', marginLeft, Math.round(this.height * 0.79))
    this.context.fillText('интерфейс', marginLeft, Math.round(this.height * 0.79) + 42)
  }
}
