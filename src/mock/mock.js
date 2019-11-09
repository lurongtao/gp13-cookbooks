const hot = require('./cookbook-category-hot.json')
const cate = require('./cookbook-category.json')
const detail = require('./cookbook-detail.json')
const list = require('./cookbook-list.json')

module.exports = function() {
  return {
    hot,
    cate,
    detail,
    list
  }
}