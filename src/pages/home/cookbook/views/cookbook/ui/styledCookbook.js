import styled from 'styled-components'

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