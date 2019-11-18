import React, { useState } from "react"
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       name: "alife"
//     };
//   }
//   render() {
//     const { count } = this.state;
//     return (
//       <div>
//         Count: {count}
//         <button onClick={() => this.setState({ count: count + 1 })}>+</button>
//         <button onClick={() => this.setState({ count: count - 1 })}>-</button>
//       </div>
//     );
//   }
// }
function App() {
  let [count, setCount] = useState(1)
  return (
    <div>
      <button onClick={() => {setCount(count-1)}}> - </button>
      {count}
      <button onClick={() => {setCount(count+1)}}> + </button>
    </div>
  )
}

export default App
