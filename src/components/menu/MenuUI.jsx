import React from 'react'
import { MenuWrap } from './styledMenu'

export default function MenuUI(props) {
  return (
    <MenuWrap>
      <div>
        <ul>
          {
            props.tabs.map((value, index) => {
              return (
                <li 
                  key={value+index}
                  className={value === props.tab ? 'active' : ''}
                  onClick={() => props.onClickTab(value)}
                ><span>{value}</span></li>
              )
            })
          }
        </ul>
      </div>
      <div>
        <ul>
          {
            props.contents.map((value, index) => {
              return <li key={value+index}>{value}</li>
            })
          }
        </ul>
      </div>
    </MenuWrap>
  )
}
