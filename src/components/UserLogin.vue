<template>
    <AuthModal @close="$emit('close')">
        <template v-if="userData">
            <div slot="body">
                <p class="text-center">Congratulations! You have successfully logged in!</p>
            </div>
            <div slot="footer"
                 class="row text-center">
                <div class="col-md-6 my-2">
                    <button type="button"
                            class="btn btn-primary w-75"
                            @click="$emit('show-modal-profile')">
                        Profile
                    </button>
                </div>
                <div class="col-md-6 my-2">
                    <button type="button"
                            class="btn btn-primary w-75"
                            @click="$emit('close')">
                        Ok
                    </button>
                </div>
            </div>
        </template>
        <template v-else>
            <h4 slot="header">Welcome Back</h4>
            <form slot="body"
                  @keydown="setAuthError(null)">
                <label for="email">
                    Email address
                </label>
                <input type="email"
                       class="form-control"
                       id="email"
                       aria-describedby="emailHelp"
                       v-model="user.email"
                       placeholder="Enter email">
                <label for="password">
                    Password
                </label>
                <input type="password"
                       class="form-control"
                       id="password"
                       aria-describedby="emailHelp"
                       v-model="user.password"
                       placeholder="Enter password">
            </form>
            <div slot="footer">
                <button type="button"
                        class="btn btn-primary w-100"
                        @click="submit">
                    Login to your Account
                </button>
                <ErrorField :errors="authErrors"/>
            </div>
        </template>
    </AuthModal>
</template>

<script>
  import AuthModal from './common/AuthModal'
  import { mapActions, mapGetters, mapMutations } from 'vuex'
  import ErrorField from './common/ErrorField'

  export default {
    name: 'UserLogin',
    components: {
      ErrorField,
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
        userData: 'userData',
        authErrors: 'authErrors'
      })
    },
    methods: {
      ...mapActions([
        'login'
      ]),
      ...mapMutations([
        'setAuthError'
      ]),
      submit () {
        this.login({ ...this.user })
      }
    },
    beforeDestroy () {
      this.setAuthError(null)
    }
  }
</script>
