import Vue from 'vue'
import Vuex from 'vuex'

// import axios from 'axios'
import * as io from 'socket.io-client'

const hostname = window.location.hostname
const socket = io.connect(hostname + ':3000')

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loggedIn: false,
        username: null,
        users: ['user1', 'user2'],
        chatHistory: []
    },
    mutations: {
        updateLogin (state, incomingUsername) {
            state.username = incomingUsername
            state.loggedIn = true
        },
        updateUsers (state, incomingUsers) {
            state.users = incomingUsers
        },
        updateChatHistory (state, incomingChatHistory) {
            state.chatHistory = incomingChatHistory
        }
    },
    actions: {
        onConnect ({ commit, state }) {
            socket.on('chatHistory', (chatHistory) => {
                commit('updateChatHistory', chatHistory)
            })
        },

        handleLogin ({ commit }, incomingUsername) {
            commit('updateLogin', incomingUsername)
            socket.emit('login', incomingUsername, (incomingChatHistory) => {
                commit('updateChatHistory', incomingChatHistory)
            })
        },

        sendMessage ({ commit, state }, message) {
            const output = { sender: state.username, message: message }
            socket.emit('newMessage', output, (incomingChatHistory) => {
                commit('updateChatHistory', incomingChatHistory)
            })
        }

    },
    modules: {
    }
})
