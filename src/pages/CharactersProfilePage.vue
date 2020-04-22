<template>
    <div>
        <template v-if="loadingCharacters">
            <ContentLoader/>
        </template>
        <template v-else-if="character">
            <div class="row mb-4 pb-5 border-bottom">
                <div class="col-sm-3">
                    <img :src="character.image"
                         class="rounded-circle w-100"
                         alt="Character image"/>
                </div>
                <div class="col-sm-9">
                    <p><span class="text-secondary">Name: </span>{{character.name}}</p>
                    <p><span class="text-secondary">Gender: </span> {{character.gender}}</p>
                    <p><span class="text-secondary">Species: </span> {{character.species}}</p>
                    <p><span class="text-secondary">Status: </span> {{character.status}}</p>
                    <p><span class="text-secondary">Origin: </span> {{character.origin.name}}</p>
                    <p><span class="text-secondary">Location: </span> {{character.location.name}}</p>
                </div>
            </div>
            <div class="row"
                 v-if="episodes">
                <div class="col-sm-12">
                    <h4>Episodes:</h4>
                </div>
                <template v-if="episodes.length > 1">
                    <div class="col-sm-3"
                         v-for="episode in episodes">
                        <p class="text-secondary mb-0">Episode name:</p>
                        <p>{{episode.name}}</p>
                    </div>
                </template>
                <template v-else>
                    <div class="col-sm-3">
                        <p class="text-secondary mb-0">Episode name:</p>
                        <p>{{episodes.name}}</p>
                    </div>
                </template>
            </div>
        </template>
        <template v-else>
            <div class="row">
                <div class="col-sm-12 text-center">
                    Sorry, no character with this id...
                </div>
            </div>
        </template>
    </div>
</template>
<script>
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import { store } from '../store'
  import ContentLoader from '../components/common/ContentLoader'
  // import SearchSection from '@/components/layout/SearchSection';
  // import FilterSlider from '../components/common/FilterSlider';
  // import CharactersList from '../components/layout/CharactersList';

  export default {
    name: 'CharactersProfilePage',
    computed: {
      ...mapGetters({
        userData: 'userData',
        authErrors: 'authErrors',
        character: 'character',
        episodes: 'episodes',
        loadingCharacters: 'loadingCharacters'
      })
    },
    components: {
      ContentLoader
      // CharactersList,
      // FilterSlider,
      // SearchSection
    },
    methods: {
      ...mapActions(['getCharacter', 'getEpisodes']),
      ...mapMutations(['setCharacter'])
    },
    mounted () {
      this.getCharacter(this.$route.params.id)
    }
  }
</script>
