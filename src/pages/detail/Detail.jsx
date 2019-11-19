import React, { 
  createContext,
  createRef,
  forwardRef,
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle
} from "react"

// const Input = (props, ref) => {
//   var x = 0
//   // const inputRef = useRef()
//   // useImperativeHandle(ref, () => inputRef.current)
//   return (
//     <input type="text"/>
//   )
// }
class Input extends React.Component {
  x = 0
  render() {
    return (
      <input type="text"/>
    )
  }
}

// const ChildInput = forwardRef(Input)

const App = () => {
  const appRef = createRef()

  useEffect(() => {
    console.log(appRef.current.x)
  })

  return (
    <Input ref={appRef}></Input>
  )
}

export default App
