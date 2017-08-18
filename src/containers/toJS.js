import React from 'react'
import { Iterable } from 'immutable'

export default WrappedComponent => wrappedProps => {
  const jsProps = Object.entries(wrappedProps)
  .reduce((newProps, [key, value]) => {
    newProps[key] = Iterable.isIterable(value) ? value.toJS() : value
    return newProps
  }, {})
  return <WrappedComponent {...jsProps} />
}