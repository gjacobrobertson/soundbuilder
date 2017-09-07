export const nodes = [
  {
    id: 'LF',
    nodeType: 'Value',
    value: 0.1,
    x: 300,
    y: 50
  },
  {
    id: 'LFO',
    nodeType: 'Oscillator',
    type: 'sawtooth',
    x: 300,
    y: 150
  },
  {
    id: 'gainValue',
    nodeType: 'Value',
    value: 600,
    x: 500,
    y: 150
  },
  {
    id: 'gain',
    nodeType: 'Gain',
    x: 300,
    y: 250
  },
  {
    id: 'osc',
    nodeType: 'Oscillator',
    type: 'square',
    x: 300,
    y: 350,
  },
  {
    id: 'dest',
    nodeType: 'Destination',
    x: 300,
    y: 450
  }
]

export const links = [
  {
    from: {
      id: 'LF'
    },
    to: {
      id: 'LFO',
      param: 0
    }
  },
  {
    from: {
      id: 'LFO',
      index: 0,
    },
    to: {
      id: 'gain',
      index: 0
    }
  },
  {
    from: {
      id: 'gainValue'
    },
    to: {
      id: 'gain',
      param: 0
    }
  },
  {
    from: {
      id: 'gain',
      index: 0
    },
    to: {
      id: 'osc',
      param: 1
    }
  },
  {
    from: {
      id: 'osc',
      index: 0
    },
    to: {
      id: 'dest',
      index: 0
    }
  }
]
