import { shallowMount } from '@vue/test-utils'
import Component from './index'

describe('TheHeader', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      stubs: ['nuxt-link']
    })
  })

  test('mounts properly', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
