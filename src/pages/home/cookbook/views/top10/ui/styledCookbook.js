import styled from 'styled-components'

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
