/**
 * Helper for finding elements by a specific key
 * E.g. [{ title: 'foo' }, { title: 'bar' }].find('title', 'bar')
 * => { title: 'bar' }
 *
 * @param   {string} key
 * @param   {+}      value
 * @returns {Function}
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
