import { Component } from 'react'
import {
  Map,
  List,
  Seq,
  fromJS,
  is,
  Set
} from 'immutable'

export default class Detail extends Component {
  render() {
    const { Range } = require('immutable');
    const aRange = Range(1, Infinity)
      .skip(1000)
      .map(n => -n)
      .filter(n => n % 2 === 0)
      .take(2)
      .reduce((r, n) => r * n, 1);
    // 1006008

    console.log(aRange)

    return null
  }
}
