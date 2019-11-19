// import React, { 
//   createContext,
//   createRef,
//   forwardRef,
//   useState,
//   useEffect,
//   useContext,
//   useReducer,
//   useCallback,
//   useMemo,
//   useRef,
//   useImperativeHandle,
//   useLayoutEffect
// } from "react"

// const Child = (props) => {
//   console.log('child')
//   return (
//     <div>hello</div>
//   )
// }

// const App = () => {
//   let [title, setTitle] = useState('hello')
//   let [style, setStyle] = useState({fontSize: '100px'})

//   const handleMyClick = useMemo(() => () => console.log(0), [])

//   const MemoChild = useMemo(() => {
//     return (
//       <Child style={style} onMyClick={handleMyClick}></Child>
//     )
//   }, [style, handleMyClick])

//   useEffect(() => {
//     setTitle('world')
//   }, [])

//   return MemoChild
// }

// const App = () => {
//   let ref = useRef()
//   let [title, setTitle] = useState('hello')

//   useLayoutEffect(() => {
//     console.log(0)
//     console.log(title)
//     setTitle('world')
//   }, [title])

//   useEffect(() => {
//     console.log(1)
//     console.log(title)
//   }, [title])

//   return (
//     <div ref={ref}>{title}</div>
//   )
// }

// function useGretting(str, setTitle) {
//   setTimeout(() => {
//     setTitle(str)
//   }, 2000)
// }

// const Child1 = () => {
//   let [title, setTitle] = useState('hello')
//   useGretting('world', setTitle)

//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setTitle('world')
//   //   }, 2000)
//   // }, [])

//   return (
//     <div>{title}</div>
//   )
// }

// const Child2 = () => {
//   let [title, setTitle] = useState('hi')
//   useGretting('oh', setTitle)
//   // useEffect(() => {
//   //   setTimeout(() => {
//   //     setTitle('oh')
//   //   }, 2000)
//   // }, [])

//   return (
//     <div>{title}</div>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <Child1></Child1>
//       <Child2></Child2>
//     </>
//   )
// }

export default () => {
  return null
}
