const radius = 6
const spacing = radius * 3

class AudioNodeHelper {
  constructor({inputs, outputs, params}) {
    this.width = Math.max(100, (params.length + 1) * spacing)
    this.height = Math.max(...[inputs, outputs].map(n => (n + 1) * spacing))
  }

  getInputPosition(i) {
    return { x: -radius, y: (i + 1) * spacing }
  }

  getOutputPosition(i) {
    return { x: this.width + radius, y: (i + 1) * spacing }
  }

  getParamPosition(i) {
    return { x: (i + 1) * spacing, y: -radius}
  }
}

export default AudioNodeHelper
