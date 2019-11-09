import styled from 'styled-components'
import border from 'components/styled/border.js'

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

export const TitleWrap = border({
  comp: styled.div `
    height: .5rem;
    padding-left: .2rem;
    background: #fff;
    line-height: .5rem;
  `
})

export const Top10Wrap = styled.div `
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
    }
  }
`
