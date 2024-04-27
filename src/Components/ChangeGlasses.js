import React, { Component, Fragment } from 'react'
import Models from './Models'
import Glasses from './Glasses'

export default class ChangeGlasses extends Component {
  render() {
    return (
      <Fragment>
        <Models/>
        <Glasses/>
      </Fragment>
    )
  }
}
