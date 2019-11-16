import styled from 'styled-components'
import border from 'components/styled/border'
import cbEllipsis from 'components/styled/ellipsis'

export const ListWrap = styled.div `
  height: 100%;
  display: flex;
  flex-direction: column;

  .list {
    flex: 1;
    overflow-y: scroll;
  }

  .am-navbar {
    background: #ee742f;
  }

  .am-list-view-scrollview {
    height: 100%;
    width: 100%;
  }

  .am-list-view-scrollview-content {
    width: 100%;
  }
`

export const ListItem = border({
  comp: styled.li `
    padding: .1rem;
    display: flex;
    >div:first-child {
      width: 1.4rem;
    }
    >div:last-child {
      flex: 1;

      overflow: hidden;

      h2 {
        font-size: .2rem;
      }
      
      h4 {
        font-size: .12rem;
        font-weight: 100;
        color: #666;
        line-height: .24rem;
      }
    }
  `,
  width: '0 0 1px 0'
})

export const H3Wrap = cbEllipsis({
  Comp: styled.h3 `
    font-size: .16rem;
    font-weight: 100;
    color: #666;
    line-height: .24rem;
  `,
  $width: '100%',
  $lineClamp: 1
})

