import { sortBy } from 'lodash-es'
import { shallowMount } from '@vue/test-utils'
import Component from './index'

jest.mock('lodash-es/sortBy')

sortBy.mockImplementation((fn) => fn)

describe.skip('hotels', () => {
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
})
