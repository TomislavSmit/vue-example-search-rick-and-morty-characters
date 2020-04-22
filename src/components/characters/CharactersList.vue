<template>
    <section>
        <template v-if="loadingCharacters">
            <ContentLoader/>
        </template>
        <template v-else-if="characters && characters.results.length > 0">
            <div class="row">
                <div v-for="(character, index) in characters.results"
                     :key="`${index}-${character.name}`"
                     class="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
                    <CharactersItem :character="character"/>
                </div>
            </div>
            <pagination-links :pages="characters.info.pages"
                              :getPage="getPage"
                              :current="currentPage"
                              :next="characters.info.next"
                              :prev="characters.info.prev"/>
        </template>
        <template v-else>
            <div class="row">
                <div class="col-md-12 text-center"
                     data-test-id="no-characters">
                    Sorry, no characters...
                </div>
            </div>
        </template>
    </section>
</template>
<script>
  import CharactersItem from './CharactersItem'
  import { mapActions, mapGetters } from 'vuex'
  import ContentLoader from '../common/ContentLoader'
  import PaginationLinks from '../common/PaginationLinks'
  import SearchSection from '../SearchSection'

  export default {
    name: 'CharactersList',
    data: () => ({
      currentPage: 1
    }),
    components: {
      SearchSection,
      PaginationLinks,
      ContentLoader,
      CharactersItem
    },
    computed: {
      ...mapGetters({
        characters: 'characters',
        loadingCharacters: 'loadingCharacters'
      })
    },
    methods: {
      ...mapActions(['getCharacters']),
      getPage (pageNumber) {
        this.$router.push(
          { query: { page: pageNumber, name: this.$route.query.name } })
        this.currentPage = pageNumber
        this.getCharacters([this.currentPage, this.$route.query.name])
      }
    },
    mounted () {
      this.$route.query.page && (this.currentPage = Number(this.$route.query.page))
      this.getCharacters([this.$route.query.page, this.$route.query.name])
    }
  }
</script>

