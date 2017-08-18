export const nodes = [
  {
    id: 'C',
    nodeType: 'Value',
    value: 261.626,
    x: 100,
    y: 150
  },
  {
    id: 'Detune',
    nodeType: 'Value',
    value: 200,
    x: 200,
    y: 150
  },
  {
    id: 'OC',
    nodeType: 'Oscillator',
    type: 'sawtooth',
    x: 100,
    y: 200
  },
  // {
  //   id: 'E',
  //   nodeType: 'Value',
  //   value: 329.628,
  //   x: 300,
  //   y: 150
  // },
  // {
  //   id: 'OE',
  //   nodeType: 'Oscillator',
  //   x: 300,
  //   y: 200
  // },
  // {
  //   id: 'G',
  //   nodeType: 'Value',
  //   value: 391.995,
  //   x: 500,
  //   y: 150
  // },
  // {
  //   id: 'OG',
  //   nodeType: 'Oscillator',
  //   x: 500,
  //   y: 200
  // },
  // {
  //   id: 'LF',
  //   nodeType: 'Value',
  //   value: 1,
  //   x: 300,
  //   y: 50
  // },
  // {
  //   id: 'LFO',
  //   nodeType: 'Oscillator',
  //   type: 'square',
  //   frequency: 1,
  //   x: 300,
  //   y: 100
  // },
  {
    id: 'dest',
    nodeType: 'Destination',
    x: 300,
    y: 300
  }
]

export const links = [
  {
    from: {
      id: 'C'
    },
    to: {
      id: 'OC',
      param: 0
    }
  },
  {
    from: {
      id: 'Detune'
    },
    to: {
      id: 'OC',
      param: 1
    }
  },
  {
    from: {
      id: 'OC',
      index: 0
    },
    to: {
      id: 'dest',
      index: 0
    }
  }
]
