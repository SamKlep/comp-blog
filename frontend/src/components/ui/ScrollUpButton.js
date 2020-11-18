import React from 'react'
import ScrollUpButton from 'react-scroll-up-button'

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton
          ContainerClassName='ScrollUpButton__Container'
          TransitionClassName='ScrollUpButton__Toggled'></ScrollUpButton>
      </div>
    )
  }
}
