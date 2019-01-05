import React, { Component } from 'react'
import { connect } from 'react-redux'

import { exampleAction } from '../actions'

class ExampleComponent extends Component {
  render () {
    return (
      <div>
        Example Component
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { exampleState: state.exampleState }
}

export default connect(mapStateToProps,
  {
    exampleAction
  })(ExampleComponent)