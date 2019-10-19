import { shallowMount } from '@vue/test-utils'
import Component from './index'

describe('HomeServices', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component, {})
  })

  test('mounts properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
