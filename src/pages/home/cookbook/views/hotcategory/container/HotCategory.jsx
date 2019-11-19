import React, { useState, useEffect, useCallback, useMemo } from 'react'
import http from 'utils/http'
import { withRouter } from 'react-router-dom'

import HotCategoryUI from '../ui/HotCategoryUI'

const HotCategory = (props) => {
  let [ data, setData ] = useState([])

  useEffect(() => {
    (async () => {
      let result = await http.get('/api/hot')
      let data = result['hot-category'].map((value, index) => {
        return {
          icon: value.img,
          text: value.title
        }
      })

      data.push({
        icon: '',
        text: '更多...'
      })

      setData(data)
    })()
  }, [])

  const handleClick = useCallback(
    (text) => {
      props.history.push('/list', { text })
    },
    [props.history],
  )

  return (
    useMemo(() => {
      return <HotCategoryUI onClick={handleClick} data={data}></HotCategoryUI>
    }, [handleClick, data])
  )
}

export default withRouter(HotCategory)