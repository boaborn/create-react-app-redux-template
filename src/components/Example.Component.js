import React, { Component } from 'react'
import { connect } from 'react-redux'

import { exampleAction } from '../actions'
import ExampleImage from '../images/react.png'

class ExampleComponent extends Component {

  render () {
    return (
      <div>
        Example Component
        <button onClick={ this.props.exampleAction }>Button</button>
        <div>
          <img src={ ExampleImage } alt="example_image"/>
        </div>
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
