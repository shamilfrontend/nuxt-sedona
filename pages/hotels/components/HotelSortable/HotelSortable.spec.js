import { shallowMount } from '@vue/test-utils'
import Component from './index'

describe('HotelSortable', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      propsData: {
        count: 10
      }
    })
  })

  test('mounts properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
