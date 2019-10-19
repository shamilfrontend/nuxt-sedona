import { shallowMount } from '@vue/test-utils'
import Component from './index'

describe('TheFooter', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Component, {
      mocks: {
        $route: {
          path: '/'
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
})
