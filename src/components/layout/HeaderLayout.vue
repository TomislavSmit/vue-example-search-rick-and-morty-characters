<template>
    <div class="row my-4">
        <div class="col-4">
            <router-link class="nav-link"
                         active-class="active"
                         exact
                         tag="a"
                         to="/">
                <img src="../../assets/img/logo.png"
                     class="logo"/>
            </router-link>
        </div>
        <div class="col-8">
            <ul class="nav justify-content-end">
                <template v-if="userData">
                    <li class="nav-item"
                        @click="showProfileModal = true">
                        <button type="button"
                                class="btn btn-link">
                            <img class="avatar"
                                 src="../../assets/img/avatar.png">
                        </button>
                    </li>
                </template>
                <template v-else>
                    <li class="nav-item"
                        @click="showModalLogin = true">
                        <button type="button"
                                class="btn btn-link login-button">
                            Login
                        </button>
                    </li>
                    <li class="nav-item"
                        @click="showModalRegister = true">
                        <button type="button"
                                class="btn btn-primary rounded-pill">
                            New Account
                        </button>
                    </li>
                </template>
            </ul>
        </div>

        <Login v-if="showModalLogin"
               @close="showModalLogin = false"
               @show-modal-profile="profileModal"/>

        <Register v-if="showModalRegister"
                  @close="showModalRegister = false"
                  @login="loginModal"/>

        <Profile v-if="showProfileModal"
                 @close="showProfileModal = false"/>
    </div>
</template>

<script>
  import Login from '../UserLogin'
  import Register from '../UserRegister'
  import { mapGetters } from 'vuex'
  import Profile from '../UserProfile'

  export default {
    name: 'HeaderLayout',
    components: {
      Profile,
      Register,
      Login
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
