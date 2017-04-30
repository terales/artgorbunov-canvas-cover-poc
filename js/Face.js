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

    this.scaleX = this.setUpScaleX()

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
    //this.drawFullImage(this.frontImg)
    //this.drawFullImage(this.faceImg)
    //this.drawText()

    this.drawFacePath(scroll)
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
    this.context.fillStyle = '#fff'
    
    this.context.font = '19px serif';
    this.context.fillText('Илья Бирман', 35, 470)

    this.context.font = '42px serif';
    this.context.fillText('Пользовательский', 33, 525)
    this.context.fillText('интерфейс', 33, 565)
  }

  drawFacePath (scroll) {
    this.context.beginPath()
    this.context.moveTo(0, 0)
    this.context.lineTo(this.width * scroll, 0)
    this.context.lineTo(this.width * scroll, this.height)
    this.context.lineTo(0, this.height)
    this.context.closePath()
    this.context.fill()
  }

  setUpScaleX () {
    return new LogarithmicScale({
      minPos: 1,
      maxPos: 0,
      minVal: this.width,
      maxVal: 0.1
    })
  }
}
