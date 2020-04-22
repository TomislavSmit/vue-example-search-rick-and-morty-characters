import { createLocalVue, shallowMount } from '@vue/test-utils'
import CharactersList from '@/components/characters/CharactersList'
import Vuex from 'vuex'
import router from '@/router'
import ContentLoader from '../../src/components/common/ContentLoader'
import CharactersItem from '../../src/components/characters/CharactersItem'

const localVue = new createLocalVue()
localVue.use(Vuex)

let store
let wrapper

describe('CharactersList component', () => {
  it('Renders loader while getting the data', () => {
    let actions = {
      getCharacters: jest.fn()
    }
    let getters = {
      loadingCharacters: () => true,
      characters: jest.fn()
    }
    let state = {
      loadingCharacters: true,
      characters: []
    }

    store = new Vuex.Store({
      actions,
      getters,
      state
    })

    console.log('store', store.state.loadingCharacters)
    wrapper = shallowMount(CharactersList, {
      localVue,
      store,
      router
    })

    expect(wrapper.find(ContentLoader).exists())
      .toBe(true)
  })

  it('Shows there is no results', () => {
    let actions = {
      getCharacters: jest.fn()
    }
    let getters = {
      loadingCharacters: () => false,
      characters: () => {}
    }
    let state = {}

    store = new Vuex.Store({
      actions,
      getters,
      state
    })

    wrapper = shallowMount(CharactersList, {
      store,
      localVue,
      router
    })

    expect(wrapper.find('[data-test-id="no-characters"]').text())
      .toBe('Sorry, no characters...')
  })

  // it('Renders CharactersItem component', () => {
  //   let state = {
  //     loadingCharacters: false,
  //     characters: {
  //       results: [{
  //         id: 2,
  //         name: 'Morty Smith',
  //         status: 'Alive',
  //         species: 'Human',
  //         type: '',
  //         gender: 'Male',
  //         origin: {
  //           name: 'Earth (C-137)',
  //           url: 'https://rickandmortyapi.com/api/location/1'
  //         },
  //         location: {
  //           name: 'Earth (Replacement Dimension)',
  //           url: 'https://rickandmortyapi.com/api/location/20'
  //         },
  //         image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  //         episode: [
  //           'https://rickandmortyapi.com/api/episode/1',
  //           'https://rickandmortyapi.com/api/episode/2'
  //         ],
  //         url: 'https://rickandmortyapi.com/api/character/2',
  //         created: '2017-11-04T18:50:21.651Z'
  //       }],
  //       info: {
  //         pages: 0
  //       }
  //     }
  //   }
  //   let actions = {
  //     getCharacters: jest.fn()
  //   }
  //   let getters = {
  //     loadingCharacters: () => false,
  //     characters: () => state.characters
  //   }
  //
  //   store = new Vuex.Store({
  //     actions,
  //     getters,
  //     state
  //   })
  //
  //   wrapper = shallowMount(CharactersList, {
  //     localVue,
  //     store,
  //     router
  //   })
  //
  //
  //   wrapper.setData(
  //   )
  //
  //   expect(wrapper.find(CharactersItem).exists())
  //     .toBe(true)
  // })
})
