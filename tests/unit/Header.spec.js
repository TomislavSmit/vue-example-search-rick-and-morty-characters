import { createLocalVue, mount } from '@vue/test-utils'
import auth from '@/store/modules/auth'
import Vuex from 'vuex'
import Header from '@/components/layout/HeaderLayout'
import Login from '@/components/UserLogin'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('HeaderLayout.vue', () => {
  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        auth
      },
    })

    wrapper = mount(Header, {
      store,
      localVue,
      stubs: ['router-link']
    })
  })

  test('Opens the login modal', () => {
    expect(wrapper.find(Login).exists()).toBe(false)
    wrapper.find('.login-button').trigger('click')
    expect(wrapper.find(Login).exists()).toBe(true)
  })

  test('Login modal has form', () => {
    wrapper.find('.login-button').trigger('click')
    expect(wrapper.find('form').exists()).toBe(true)
  })
})
