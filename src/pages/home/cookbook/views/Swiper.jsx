import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Carousel } from 'antd-mobile'

import {
  SwiperWrap
} from './styledCookbook'

import { asyncLoadData } from '../actionCreator'

const mapState = (state) => {
  return {
    list: state.cookbook.list
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadData() {
      dispatch(asyncLoadData())
    }
  }
}

class Swiper extends Component {
  async componentDidMount() {
    this.props.loadData()
  }

  render() {
    return (
      <div>
        <SwiperWrap>
          <Carousel
            autoplay={true}
            infinite
          >
            {
              this.props.list.slice(0, 5).map((value) => {
                return <img key={value.id} src={value.img} alt={value.name}/>
              })
            }
          </Carousel>
        </SwiperWrap>
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(Swiper)
