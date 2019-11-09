import styled from 'styled-components'

export const HeaderWrap = styled.div `
  height: .44rem;
  background: #ee742f;
  text-align: center;
  line-height: .44rem;
  font-size: .2rem;
  color: #fff;
`

export const SwiperWrap = styled.div `
  height: 0;
  font-size: 0;
  padding-bottom: 66%;
  img {
    width: 100%;
  }
`

export const GridWrap = styled.div `
  > div:first-child {
    height: .5rem;
    padding-left: .2rem;
    background: #fff;
    line-height: .5rem;
    border-bottom: solid 1px #ccc;
  }
  .grid-item {
    img {
      width: .8rem;
      height: .8rem;
      border-radius: .1rem;
    }
    > div {
      margin-top: .1rem;
    }
  }
`