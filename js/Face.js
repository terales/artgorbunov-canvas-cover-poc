export default class Face {
  constructor ({context, viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.height = viewHeight
    this.width = this.height * aspectRatio
    this.marginLeft = viewWidth / 2 - this.width / 2  // centered
    this.marginTop = this.height * 0.1

    this.allAssetsLoaded = Promise.all([
      this.loadFront(),
      this.loadFace()
    ])
  }

  render (scroll) {
    const step = 2 - scroll

    const left = step * this.marginLeft
    const top = step * this.marginTop

    this.context.setTransform(1, 0, 0, 1, left, top)

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
    this.context.fillStyle = '#fff'
    
    this.context.font = '19px serif';
    this.context.fillText('Илья Бирман', 35, 470)

    this.context.font = '42px serif';
    this.context.fillText('Пользовательский', 33, 525)
    this.context.fillText('интерфейс', 33, 565)
  }
}
