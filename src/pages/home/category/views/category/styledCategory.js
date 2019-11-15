import styled from 'styled-components'

export const CategoryWrap = styled.div `
  background: #fff;
  display: flex;
  flex-direction: column;
  height: 100%;
  .cate-list {
    position: relative;
    overflow: hidden;
    flex: 1;
    > div {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }
`