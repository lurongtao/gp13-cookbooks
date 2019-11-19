import React, { useState, useEffect, createContext, useContext } from "react"

// class App extends React.Component {
//   state = {
//     title: 0
//   }

//   componentDidMount() {
//     document.title = this.state.title

//     this.timer = setInterval(() => {
//       this.setState((state) => ({
//         title: state.title + 1
//       }))
//     }, 1000)
//   }

//   componentDidUpdate() {
//     document.title = this.state.title
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer)
//   }

//   render() {
//     return null
//   }
// }

// function App(props) {
//   let [ title, setTitle ] = useState(props.title)
//   let [ count, setCount ] = useState(0)

//   useEffect(() => {
//     document.title = title
//     setCount(count)

//     return () => {
//       console.log('unmounted.')
//     }
//   }, [title, count])

//   useEffect(() => {
//     console.log(0)
//     let timer = setInterval(() => {
//       setTitle((title) => {
//         return title + 1
//       })
//     }, 1000)

//     return () => {
//       clearInterval(timer)
//       console.log('unmounted.')
//     }
//   }, [])

//   const handleClick = () => {
//     setTitle(100)
//     // setCount(10)
//   }

//   return (
//     <div>
//       hello
//       <button onClick={handleClick}>click</button>
//     </div>
//   )
// }

const myContext = createContext()
const yourContext = createContext()

const { Provider } = myContext
const { Provider:YourProvider } = yourContext

const Child1 = () => {
  let {title} = useContext(myContext)
  let {msg} = useContext(yourContext)
  return (
    <div>{title}{msg}</div>
  )
}
const Child2 = () => {
  return <div>child2</div>
}

const App = () => {
  return (
    <Provider value={{title: 'hello'}}>
      <YourProvider value={{msg: 'world'}}>
        <Child1></Child1>
      </YourProvider>
      <Child2></Child2>
    </Provider>
  )
}

export default App
