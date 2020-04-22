<template>
    <AuthModal @close="$emit('close')"
               modalContainerClass="profile">
        <div class="row"
             slot="header">
            <div class="col-md-12">
        <span class="profile-modal-close-button"
              @click="$emit('close')"></span>
            </div>
            <div class="col-md-4">
                <img class="w-100"
                     src="../assets/img/avatar.png">
            </div>
            <div class="col-md-8">
                <h4 class="mt-4">{{userData && userData.email}}</h4>
            </div>
        </div>
        <div slot="footer">
            <button type="button"
                    class="btn btn-primary w-100"
                    @click="submit">
                Logout
            </button>
        </div>
    </AuthModal>
</template>

<script>
  import AuthModal from './common/AuthModal'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'UserProfile',
    components: {
      AuthModal
    },
    data: () => ({
      user: {
        email: '',
        password: ''
      }
    }),
    computed: {
      ...mapGetters({
        userData: 'userData'
      })
    },
    methods: {
      ...mapActions([
        'logout'
      ]),
      submit () {
        this.logout()
          .then(() => {
            this.$emit('close')
          })
      }
    }
  }
</script>
