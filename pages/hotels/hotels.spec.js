import { shallowMount } from '@vue/test-utils'
import Component from './index'

describe('hotels', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      computed: {
        hotels: () => []
      }
    })
  })

  test('mounts properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('methods', () => {
    describe('starClasses', () => {
      test('should return className "hotel-stars-one" if value equal 1', () => {
        const expected = 'hotel-stars-one'
        const result = wrapper.vm.starClasses(1)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-stars-second" if value equal 1', () => {
        const expected = 'hotel-stars-second'
        const result = wrapper.vm.starClasses(2)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-stars-three" if value equal 1', () => {
        const expected = 'hotel-stars-three'
        const result = wrapper.vm.starClasses(3)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-stars-four" if value equal 1', () => {
        const expected = 'hotel-stars-four'
        const result = wrapper.vm.starClasses(4)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-stars-five" if value equal 5', () => {
        const expected = 'hotel-stars-five'
        const result = wrapper.vm.starClasses(5)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-stars-five" if value equal any', () => {
        const expected = 'hotel-stars-five'
        const result = wrapper.vm.starClasses('any')
        expect(result).toEqual(expected)
      })
    })
  })
})
