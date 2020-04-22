<template>
    <div id="app"
         class="container">
        <header-layout/>
        <router-view></router-view>
        <footer-layout/>
    </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import HeaderLayout from './components/layout/HeaderLayout'
  import FooterLayout from './components/layout/FooterLayout'

  export default {
    name: 'App',
    components: {
      FooterLayout,
      HeaderLayout
    },
    methods: {
      ...mapActions([
        'userInit'
      ])
    },
    mounted () {
      this.userInit()
    }
  }
</script>

<style src="@/assets/scss/main.scss"
       lang="scss"></style>
