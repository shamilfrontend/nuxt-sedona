import { shallowMount } from '@vue/test-utils'
import Component from './index'

describe('HotelItem', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        hotel: {
          imagePath: 'hotel.png',
          title: 'Hotel Name',
          price: '2000',
          starCount: 1,
          rating: 10
        }
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
      test('should return className "hotel-item__stars_one" if value equal 1', () => {
        const expected = 'hotel-item__stars_one'
        const result = wrapper.vm.starClasses(1)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-item__stars_second" if value equal 1', () => {
        const expected = 'hotel-item__stars_second'
        const result = wrapper.vm.starClasses(2)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-item__stars_three" if value equal 1', () => {
        const expected = 'hotel-item__stars_three'
        const result = wrapper.vm.starClasses(3)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-item__stars_four" if value equal 1', () => {
        const expected = 'hotel-item__stars_four'
        const result = wrapper.vm.starClasses(4)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-item__stars_five" if value equal 5', () => {
        const expected = 'hotel-item__stars_five'
        const result = wrapper.vm.starClasses(5)
        expect(result).toEqual(expected)
      })
      test('should return className "hotel-item__stars_one" if value equal any', () => {
        const expected = 'hotel-item__stars_one'
        const result = wrapper.vm.starClasses('any')
        expect(result).toEqual(expected)
      })
    })
  })
})
