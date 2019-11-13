import styled from 'styled-components'
import border from 'components/styled/border'

export const HeaderWrap = styled.div `
  height: .44rem;
  background: #ee742f;
  text-align: center;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const SlideWrap = border({
  comp: styled.ul`
    width: 1.4rem;
    height: .3rem;
    display: flex;
    position: relative;
    li {
      flex: 1;
      line-height: .3rem;
      &.active {
        color: #ee742f;
        position: relative;
        z-index: 2;
      }
      &:last-child {
        position: absolute;
        border-radius: .15rem;
        width: 50%;
        height: 100%;
        background: #fff;
        z-index: 1;
        left: 0;
        transition: all .2s ease-in;
        &.right {
          left: 50%;
        }
      }
    }
  `,
  color: '#fff',
  radius: 15
})