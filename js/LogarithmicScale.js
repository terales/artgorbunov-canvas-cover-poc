 /**
  * Thanks http://stackoverflow.com/a/846249/1363799
  * for perfect explanation of logarithmic scales
  */
export default class LogarithmicScale {
  constructor ({ minPos, maxPos, minVal, maxVal }) {
    this.maxVal = Math.log(maxVal)
    this.minVal = Math.log(minVal)
    this.maxPos = maxPos
    this.minPos = minPos
    this.scale = (this.maxVal - this.minVal) / (this.maxPos - this.minPos)
  }

  value (position) {
    return Math.exp((position - this.minPos) * this.scale + this.minVal)
  }

  position (value) {
    return this.minPos + (Math.log(value) - this.minVal) / this.scale
  }
}
