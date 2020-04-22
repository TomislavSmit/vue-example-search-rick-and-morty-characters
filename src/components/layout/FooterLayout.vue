<template>
    <footer class="page-footer font-small blue mb-4">
        <div class="footer-copyright text-center py-4">
            © 2020 Copyright: <a href="mailto:tomasmit@yahoo.com"> tomasmit@yahoo.com</a>
        </div>
    </footer>
</template>
<script>
  import UserLogin from '../UserLogin'
  import UserRegister from '../UserRegister'
  import { mapGetters } from 'vuex'
  import UserProfile from '../UserProfile'

  export default {
    name: 'FooterLayout',
    components: {
      UserProfile,
      UserRegister,
      UserLogin
    },
    data: () => ({
      showModalLogin: false,
      showModalRegister: false,
      showProfileModal: false
    }),
    computed: {
      ...mapGetters({
        userData: 'userData'
      })
    },
    methods: {
      loginModal () {
        this.showModalLogin = true
        this.showModalRegister = false
      },
      profileModal () {
        this.showProfileModal = true
        this.showModalLogin = false
      }
    },
    beforeDestroy () {
      this.showModalRegister = false
      this.showProfileModal = false
      this.showModalLogin = false
    }
  }
</script>
