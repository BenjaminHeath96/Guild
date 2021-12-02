<template>
    <div class="home">
        <Navbar/>
        <div class="content">
            <div v-if="!loggedIn" class="not-logged-in">
                Please log in before chatting with your friends
            </div>
            <b-card v-else title="Chat History">
                <div class="message" v-for="(message, index) in chatHistory" :key="index" :class="{'right-align': message.sender === username}">
                    <div class="user">{{message.sender}}</div>
                    <div class="text">{{message.message}}</div>
                </div>
                <div class="text-input">
                    <b-form inline>
                        <b-form-input v-model="message" placeholder="Write your message here"></b-form-input>
                        <b-button @click.prevent="handleInput" variant="primary">Send Message</b-button>
                    </b-form>
                </div>
            </b-card>

        </div>

    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

import Navbar from './Navbar.vue'

export default {
    name: 'Home',
    components: {
        Navbar
    },
    data () {
        return {
            message: ''
        }
    },
    mounted () {
        this.onConnect()
    },
    computed: {
        ...mapState(['loggedIn', 'username', 'chatHistory'])
    },
    methods: {
        ...mapActions(['onConnect', 'sendMessage']),
        handleInput () {
            console.log('sendMessage')
            if (this.message === '') {
                return
            }
            this.sendMessage(this.message)
            this.message = ''
        }
    }

}
</script>

<style scoped lang="scss">
$input-height: 50px;

.home {
    .content {
        background-color: #ADD8E6;
        margin: 0 50px;
        .not-logged-in {
            padding: 50px 0;
        }

        .card {
            background-color: #ADD8E6;

            .card-body {
                margin-bottom: 50px;
            }
        }

        .message {
            text-align: left;
            &.right-align {
                text-align: right;
            }

            .user {
                font-weight: bold;
            }
        }

        .text-input {
            height: $input-height;
            margin-top: 30px;
            position: fixed;
            bottom: 0;
            left: 50px;
            right: 50px;

            .form-inline {
                display: flex;
            }
        }

    }
}

</style>
