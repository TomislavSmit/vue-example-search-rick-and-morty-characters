<template>
    <div class="input-group">
        <form class="col-md-6 offset-md-3"
              @submit.prevent="submitSearch">
            <div class="form-group">
                <input type="text"
                       class="form-control"
                       placeholder="Search..."
                       aria-label="Search..."
                       @enter="submitSearch"
                       v-model="query"/>
                <span class="btn-search btn-close-icon position-absolute"
                      v-if="query"
                      @click="clearSearch"></span>
                <span class="btn-search btn-magnifier-icon position-absolute"
                      v-else
                      @click="submitSearch"></span>
            </div>
        </form>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'SearchBar',
    data: () => ({
      query: ''
    }),
    props: {
      submit: {
        type: Function,
        required: true
      }
    },
    methods: {
      ...mapActions(['getCharacters']),
      submitSearch () {
        this.submit(this.query)
      },
      clearSearch () {
        this.query = ''
        this.submit()
      }
    }
  }
</script>
