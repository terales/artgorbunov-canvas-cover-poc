import LogarithmicScale from './LogarithmicScale'

export default class BookPosition {
  constructor (contexts, {viewWidth, viewHeight, aspectRatio}) {
    this.contexts = contexts
    this.viewHeight = viewHeight
    this.viewWidth = viewWidth
    this.width = viewHeight * aspectRatio
    this.leftScale = this.setUpLeftScale()
    this.topScale = this.setUpTopScale()
    this.zoomScale = this.setUpZoomScale()
  }

  setTopLeftPosition (scroll) {
    const zoom = this.zoomScale.value(scroll)
    Object.keys(this.contexts).forEach(name => {
      this.contexts[name].setTransform(
        zoom,
        0,
        0,
        zoom,
        this.leftScale.value(scroll),
        this.topScale.value(scroll)
      )
    })
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
      maxPos: 0.15,
      minVal: 1,
      maxVal: 1.44
    })
  }
}