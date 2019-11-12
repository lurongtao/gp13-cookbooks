import React from 'react'

import { Carousel } from 'antd-mobile'

import { SwiperWrap } from './styled.js'

export default (props) => {
  return (
    <div>
      <SwiperWrap>
        {
          props.list.length > 0 && (
            <Carousel
              autoplay={true}
              infinite
            >
              {
                props.list.slice(0, 5).map((value) => {
                  return <img key={value.id} src={value.img} alt={value.name}/>
                })
              }
            </Carousel>
          )
        }
      </SwiperWrap>
    </div>
  )
}