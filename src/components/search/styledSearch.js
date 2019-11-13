import styled from 'styled-components'

const SearchInnerWrap = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.background || '#fff'};

  img {
    width: .2rem;
    height: .2rem;
    margin-right: .05rem;
  }
`

const SearchWrap = styled.div `
  height: .65rem;
  padding: .1rem .15rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

export {
  SearchWrap,
  SearchInnerWrap
}