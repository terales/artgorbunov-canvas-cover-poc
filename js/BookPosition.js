import LogarithmicScale from './LogarithmicScale'

export default class BookPosition {
  constructor ({context, viewWidth, viewHeight, aspectRatio}) {
    this.context = context
    this.viewHeight = viewHeight
    this.viewWidth = viewWidth
    this.width = viewHeight * aspectRatio
    this.leftScale = this.setUpLeftScale()
    this.topScale = this.setUpTopScale()
    this.zoomScale = this.setUpZoomScale()
  }

  setTopLeftPosition (scroll) {
    const zoom = this.zoomScale.value(scroll)
    this.context.setTransform(
      zoom,
      0,
      0,
      zoom,
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

  setUpZoomScale () {
    return new LogarithmicScale({
      minPos: 1,
      maxPos: 0,
      minVal: 1,
      maxVal: 1.44
    })
  }
}