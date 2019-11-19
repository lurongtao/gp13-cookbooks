import Mock from 'mockjs'

export default Mock.mock('/test', 'get', {
  ret: true,
  data: {
    list: ['a', 'b', 'c']
  }
})