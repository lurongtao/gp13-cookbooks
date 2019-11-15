import React from 'react'
import { CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'

export default (Comp) => {
  @withRouter
  class CateTransition extends React.Component {
    render() {
      return (
        <CSSTransition
          in={!!this.props.match}
          timeout={1000}
          classNames={{
            enter: 'animated',
            exit: 'animated',
            enterActive: this.props.type === 'category' ? 'slideInLeft' : 'slideInRight',
            exitActive: this.props.type === 'category' ? 'slideOutLeft' : 'slideOutRight'
          }}
          unmountOnExit
          mountOnEnter
        >
          <Comp {...this.props}></Comp>
        </CSSTransition>
      )
    }
  }

  return CateTransition
}