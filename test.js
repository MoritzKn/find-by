/* eslint-env jest */

const by = require('./')

const variants = [
  {
    title: 'by',
    key: 'test',
    value: false,
    otherValue: true,
    call () {
      return by(this.key, this.value)
    }
  },
  {
    title: 'by.id',
    key: 'id',
    value: 42,
    otherValue: 0,
    call () {
      return by.id(this.value)
    }
  },
  {
    title: 'by.slug',
    key: 'slug',
    value: 'foo-bar',
    otherValue: 'baz',
    call () {
      return by.slug(this.value)
    }
  },
  {
    title: 'by',
    key: 'type',
    value: 'FOO',
    otherValue: 'BAR',
    call () {
      return by.type(this.value)
    }
  }
]

variants.forEach((variant) => {
  describe(variant.title, () => {
    it('should return a function', () => {
      expect(typeof variant.call()).toBe('function')
    })

    describe('the returned function', () => {
      it('should return a boolean', () => {
        expect(typeof variant.call()()).toBe('boolean')
      })

      it('returns true if the property in question has the same value', () => {
        expect(variant.call()({ [variant.key]: variant.value })).toBe(true)
      })

      it('returns false if the property in question has another value', () => {
        expect(variant.call()({ [variant.key]: variant.otherValue })).toBe(false)
      })

      it('returns false if the property in question does not exist', () => {
        expect(variant.call()({})).toBe(false)
      })

      it('returns false if called on undefined', () => {
        expect(variant.call()(undefined)).toBe(false)
      })

      it('returns false if called on null', () => {
        expect(variant.call()(null)).toBe(false)
      })

      it('returns false if called on the value true', () => {
        expect(variant.call()(true)).toBe(false)
      })

      it('returns false if called on the value false', () => {
        expect(variant.call()(false)).toBe(false)
      })

      it('returns false if called on a number', () => {
        expect(variant.call()(15)).toBe(false)
      })

      it('should work in combination with Array.prototype.find', () => {
        const item1 = { [variant.key]: variant.otherValue }
        const item2 = { [variant.key]: variant.value }
        expect([item1, item2].find(variant.call())).toBe(item2)
      })

      it('should work in combination with Array.prototype.filter', () => {
        const item1 = { [variant.key]: variant.value }
        const item2 = { [variant.key]: variant.otherValue }
        const item3 = { [variant.key]: variant.value }
        const result = [item1, item2, item3].filter(variant.call())
        expect(result[0]).toBe(item1)
        expect(result[1]).toBe(item3)
      })
    })
  })
})
