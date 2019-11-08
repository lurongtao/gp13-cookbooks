import styled from 'styled-components'

export const SearchWrap = styled.div `
  height: .65rem;
  padding: .1rem .15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
  > div {
    width: 100%;
    height: 100%;
    border: ${props => props.hasBorder ? 'solid 1px #ee742f' : 0 };
    border-radius: .06rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;

    img {
      width: .2rem;
      height: .2rem;
      margin-right: .05rem;
    }
  }
  
`