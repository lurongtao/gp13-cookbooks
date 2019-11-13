import styled from 'styled-components'

import border from 'components/styled/border'

export const MenuWrap = border({
  comp: styled.div `
    flex: 1;
    display: flex;
    overflow: hidden;
    > div:first-child {
      width: .9rem;
      background: #f3f3f3;
      overflow-y: scroll;
      ul {
        li {
          height: .5rem;
          text-align: center;
          span {
            display: inline-block;
            height: 100%;
            line-height: .5rem;
          }
          &.active {
            background: #fff;
            span {
              border-bottom: solid .02rem #ee742f;
            }
          }
        }
      }
    }
    > div:last-child {
      flex: 1;
      overflow-y: scroll;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: .2rem;
        padding-top: 0;
        li {
          width: 33.33333%;
          height: .5rem;
          text-align: center;
          line-height: .5rem;
        }
      }
    }
  `,
  width: '1px 0 0 0'
})