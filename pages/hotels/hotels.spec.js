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

  test('should call asyncData', async () => {
    const spy = jest.fn()
    Component.asyncData = spy
    await Component.asyncData()
    expect(spy).toBeCalled()
  })
})
