import { mount } from '@vue/test-utils'
import Component from './index'

describe('HomePoster', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Component)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
