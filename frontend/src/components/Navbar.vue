<template>
    <b-navbar sticky toggleable="lg">
        <b-navbar-brand href="#">Chatbot</b-navbar-brand>

        <b-navbar-nav>
            <b-nav-item-dropdown v-if="!loggedIn" text="User" right>
                <b-dropdown-item @click="handleLogin('user1')" href="#">User 1</b-dropdown-item>
                <b-dropdown-item @click="handleLogin('user2')" href="#">User 2</b-dropdown-item>
            </b-nav-item-dropdown>
            <div v-else>
                {{username}}
            </div>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Navbar',
    computed: {
        ...mapState(['loggedIn', 'username'])
    },
    methods: {
        ...mapActions(['handleLogin'])
    }

}
</script>

<style scoped lang="scss">
.navbar {
    background-color: #ededed;
    color: black;

    // for whatever reason, this bootstrap class isnt working
    .ml-auto {
        margin-left: auto;
    }
}
</style>
