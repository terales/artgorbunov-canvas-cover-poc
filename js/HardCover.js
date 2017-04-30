import LogarithmicScale from './LogarithmicScale'

export default class HardCover {
  constructor (element, { viewWidth, viewHeight, aspectRatio }) {
    this.element = element
    this.viewWidth = viewWidth
    this.width = viewHeight * aspectRatio
    this.leftScale = this.setUpLeftScale()
  }

  flip (scroll) {
    const degree = (1 - scroll) * 180
    const left = this.leftScale.value(scroll)
    this.element.style = `transform: rotateY(-${degree}deg) translateX(${left}px) translateZ(5px);`
  }

  setUpLeftScale () {
    return new LogarithmicScale({
      minPos: 1,
      maxPos: 0,
      minVal: 0.1,
      maxVal: this.viewWidth / 2
    })
  }
}