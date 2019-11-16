import styled from 'styled-components'
import border from 'components/styled/border'

export const ListWrap = styled.div `
  .list {
    
  }

  .am-navbar {
    background: #ee742f;
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
      h2 {
        font-size: .2rem;
      }
      h3 {
        font-size: .16rem;
        font-weight: 100;
        color: #666;
        line-height: .24rem;
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

