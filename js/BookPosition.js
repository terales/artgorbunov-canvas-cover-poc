import LogarithmicScale from './LogarithmicScale'

export default class BookPosition {
  constructor ({context, viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.viewHeight = viewHeight
    this.viewWidth = viewWidth
    this.width = viewHeight * aspectRatio
    this.leftScale = this.setUpLeftScale()
    this.topScale = this.setUpTopScale()
  }

  setTopLeftPosition (scroll) {
    this.context.setTransform(
      1,
      0,
      0,
      1,
      this.leftScale.value(scroll),
      this.topScale.value(scroll)
    )
  }

  setUpLeftScale () {
    return new LogarithmicScale({
      minPos: 1,
      maxPos: 0,
      minVal: this.viewWidth / 2 - this.width / 2,
      maxVal: this.viewWidth / 2
    })
  }

  setUpTopScale () {
    return new LogarithmicScale({
      minPos: 1,
      maxPos: 0,
      minVal: this.viewHeight * 0.1,
      maxVal: 0.1
    })
  }
}