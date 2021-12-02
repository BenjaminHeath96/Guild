<template>
    <div class="home">
        <Navbar/>
        <div class="content">
            <div v-if="!loggedIn" class="not-logged-in">
                Please log in before chatting with your friends
            </div>
            <b-card v-else :title="chatPartner">
                <div v-if="chatHistory.length > 0" class="messages">
                    <div class="message" v-for="(message, index) in chatHistory" :key="index" :class="{'right-align': message.sender === username}">
                        <div class="user">{{message.sender}}</div>
                        <div class="text">{{message.message}}</div>
                    </div>
                </div>
                <div class="no-messages" v-else>
                    Aw man! You have no messages yet. Go ahead and text your friend to say hi!
                </div>
                <div class="text-input">
                    <b-form-input v-model="message" placeholder="Write your message here"></b-form-input>
                    <b-button type="button" @click.stop="handleInput" variant="primary">Send Message</b-button>
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
        ...mapState(['loggedIn', 'username', 'chatHistory']),
        chatPartner () {
            return this.username === 'user1' ? 'Conversation with user2' : 'Conversation with user1'
        }
    },
    methods: {
        ...mapActions(['onConnect', 'sendMessage']),
        handleInput () {
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
$input-height: 70px;

.home {
    // Content
    .content {
        background-color: #ADD8E6;
        margin: 0 50px;

        // Specific not logged in styling
        .not-logged-in {
            padding: 50px 0;
        }

        // specific card styling
        .card {
            background-color: #ADD8E6;

            .card-body {
                margin-bottom: 50px;

                .card-title {
                    position: fixed;
                    text-align: center;
                    left: 0;
                    right: 0;
                }
            }
        }

        // specific no message styling
        .no-messages {
            padding-top: 50px;
        }

        .messages {
            // styling for a message
            .message {
                text-align: left;

                &.right-align {
                    text-align: right;
                }

                .user {
                    font-weight: bold;
                }
            }
        }

        // Styling for text-input
        .text-input {
            display: flex;

            height: $input-height;
            margin-top: 30px;
            position: fixed;
            bottom: 0;
            left: 50px;
            right: 50px;

        }

    }
}

</style>
