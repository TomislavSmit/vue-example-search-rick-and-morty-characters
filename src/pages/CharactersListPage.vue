<template>
    <div class="row">
        <div class="col-md-12">
            <SearchSection/>
            <CharactersList/>
        </div>
    </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex'
  import SearchSection from '../components/SearchSection'
  import CharactersList from '../components/characters/CharactersList'

  export default {
    name: 'CharactersListPage',
    computed: {
      ...mapGetters({
        authErrors: 'authErrors'
      })
    },
    components: {
      CharactersList,
      SearchSection
    },
    methods: {
      ...mapMutations(['setCharacters'])
    }
  }
</script>
