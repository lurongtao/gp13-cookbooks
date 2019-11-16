import { Component } from 'react'
import {
  Map
} from 'immutable'

export default class Detail extends Component {
  render() {

    let map = Map({
      a: 0, 
      b: 1
    })

    let map2 = map.set('a', 0)
    console.log(map2 === map)

    return null
  }
}
