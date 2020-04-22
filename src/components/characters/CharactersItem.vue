<template>
    <div class="card">
        <img class="card-img-top"
             style="object-fit: cover;width: 100%;height: 200px;"
             :src="character.image"
             alt="Card image">
        <div class="card-body">
            <h5 class="card-title">{{character.name && character.name}}</h5>
            <p class="card-text">{{character.species && character.species}}</p>
            <router-link tag="a"
                         :to="`/characters/${character.id}`"
                         class="btn btn-primary">See Profile
            </router-link>
        </div>
    </div>
</template>
<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'CharactersItem',
    props: ['character'],
    computed: {
      ...mapGetters({
        userData: 'userData'
      })
    }
  }
</script>

