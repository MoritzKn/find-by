/**
 * [by description]
 * @param   {[type]} key   [description]
 * @param   {[type]} value [description]
 * @returns {[type]}       [description]
 */
function by (key, value) {
  return function (item) {
    return item !== null && typeof item !== 'undefined' && item[key] === value
  }
}

by.id = by.bind(null, 'id')
by.slug = by.bind(null, 'slug')
by.type = by.bind(null, 'type')

module.exports = by
