// import React, { useState } from 'react';
// import { Container, Button, Alert } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';

// import './styles.css'

// // hooks
// function Example() {
//   const [showButton, setShowButton] = useState(true);
//   const [showMessage, setShowMessage] = useState(false);
//   return (
//     <Container style={{ paddingTop: '2rem' }}>
//       {showButton && (
//         <Button
//           onClick={() => setShowMessage(true)}
//           size="lg"
//         >
//           Show Message
//         </Button>
//       )}
//       <CSSTransition
//         in={showMessage}
//         timeout={300}
//         classNames="alert"
//         unmountOnExit
//         onEnter={() => setShowButton(false)}
//         onExited={() => setShowButton(true)}
//       >
//         <Alert
//           variant="primary"
//           dismissible
//           onClose={() => setShowMessage(false)}
//         >
//           <Alert.Heading>
//             Animated alert message
//           </Alert.Heading>
//           <p>
//             This alert message is being transitioned in and
//             out of the DOM.
//           </p>
//           <Button onClick={() => setShowMessage(false)}>
//             Close
//           </Button>
//         </Alert>
//       </CSSTransition>
//     </Container>
//   );
// }

// export default Example


import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './styles.css'

export default class Profile extends React.Component {
  state = {
    show: true
  }

  handleClick = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show
      }
    })
  }

  render() {
    return (
      <>
        <CSSTransition
          in={this.state.show}
          classNames={{
            enterActive: 'animated zoomIn',
            exitActive: 'animated zoomOut',
          }}
          timeout={1000}
          appear={false}
          unmountOnExit
          onEnter={()=>{console.log('enter')}}
          onExit={()=>{console.log('exit')}}
        >
          <div>hello</div>
        </CSSTransition>
        <div>
          <button onClick={this.handleClick}>show/hide div</button>
        </div>
      </>
    )
  }
}