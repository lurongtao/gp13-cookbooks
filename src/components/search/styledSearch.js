import styled from 'styled-components'

import border from '../styled/border'

const SearchInnerWrap = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

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

const BorderedSearchInnerWrap = border({
  comp: SearchInnerWrap,
  color: props => props.borderColor,
  radius: 6,
  width: props => props.width
})

export {
  SearchWrap,
  BorderedSearchInnerWrap,
  SearchInnerWrap
}