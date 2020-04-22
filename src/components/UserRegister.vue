<template>
    <AuthModal @close="$emit('close')">
        <template v-if="userData">
            <div slot="body">
                <p class="text-center">Congratulations! You have successfully signed up!</p>
            </div>
            <div slot="footer">
                <button type="button"
                        class="btn btn-primary w-100"
                        @click="$emit('login')">
                    OK
                </button>
            </div>
        </template>
        <template v-else>
            <h4 slot="header">Create New Account</h4>
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
                    Create Account
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
    name: 'UserRegister',
    components: {
      ErrorField,
      AuthModal
    },
    data: () => ({
      user: {
        email: '',
        password: '',
        last_name: '',
        date_of_birth: ''
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
        'signUp'
      ]),
      ...mapMutations([
        'setAuthError'
      ]),
      submit () {
        this.signUp({ ...this.user })
      }
    }
  }
</script>
