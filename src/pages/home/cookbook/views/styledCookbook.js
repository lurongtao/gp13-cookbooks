import styled from 'styled-components'
import border from 'components/styled/border.js'

export const CookbookWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;
  > div:last-child {
    flex: 1;
    overflow-y: scroll;
  }
`

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
  header {
    height: .5rem;
    padding-left: .1rem;
    line-height: .5rem;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      &:nth-child(2n+1) {
        padding-left: .1rem;
        padding-right: .05rem;
        margin-bottom: .1rem;
      }
      &:nth-child(2n) {
        padding-right: .1rem;
        padding-left: .05rem;
      }
      width: 50%;
      img {
        width: 100%;
      }
      dl {
        padding-bottom: .1rem;
        background: #fff;
        dd {
          &:nth-of-type(1) {
            font-size: .18rem;
            margin-top: .05rem;
          }
          &:nth-of-type(2) {
            color: #666;
          }
          text-align: center;
        }
      }
    }
  }
`
