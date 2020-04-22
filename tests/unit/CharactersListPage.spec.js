import { createLocalVue, mount, shallowMount } from '@vue/test-utils';
import CharactersListPage from '@/pages/CharactersListPage';
import CharactersList from '@/components/characters/CharactersList';
import Vuex from 'vuex';
import characters from '@/store/modules/characters'
import SearchSection from '@/components/SearchSection'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('CharactersListPage.vue', () => {

  let store
  let wrapper

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        characters
      },
    })

    wrapper = shallowMount(CharactersListPage, {
      store,
      localVue,
      stubs: ['router-link']
    })
  })

  it('Renders CharactersListPage', () => {
    expect(wrapper.find(CharactersListPage).exists()).toBe(true)
  });

  it('Renders CharactersList', () => {
    expect(wrapper.find(CharactersList).exists()).toBe(true)
  });

  it('Renders SearchSection', () => {
    expect(wrapper.find(SearchSection).exists()).toBe(true)
  });
});
