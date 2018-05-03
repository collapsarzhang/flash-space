<template>
    <modal-component :show="show" @close="close">
        <div class="modal-title"><b>Log in</b></div>
        <form class="login-form">
            <div class="form-element-wrapper">
                <div class="form-element-title"><b>Email</b></div>
                <div class="form-element-input">
                    <input type="email" name="email" placeholder="Email" v-model="user.email">
                </div>
            </div>
            <div class="form-element-wrapper">
                <div class="form-element-title"><b>Password</b></div>
                <div class="form-element-input">
                    <input type="password" name="password" placeholder="Password" v-model="user.password">
                </div>
            </div>
            <div class="btn login-button" @click="signin"><b>Log in</b></div>
        </form>
    </modal-component>
</template>

<script>
    import Modal from '@/components/shared/Modal'
    import {mapGetters, mapActions} from 'vuex'
    export default {
        name: 'LoginModal',
        props: ['show'],
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        computed: mapGetters([
            'currentUser'
        ]),
        components: {
            'modal-component': Modal
        },
        methods: {
            close: function () {
                this.$emit('close')
            },
            signin: function () {
                this.close()
                this.login()
            },
            ...mapActions([
                'login'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .modal-title {
        font-size: 24px;
        padding: 16px 0;
        text-align: center;
        margin: auto;
    }
    .login-form {
        margin-bottom: 40px;
        .form-element-wrapper {
            width: 100%;
            position: relative;
            padding: 16px;
            .form-element-title {
                margin-bottom: 16px;
                font-size: 14px;
            }
            .form-element-input {
                width: 100%;
                input {
                    width: 100%;
                    font-size: 14px;
                }
            }
        }
        .login-button {
            display: block;
            margin: auto;
            max-width: 75%;
            padding: 16px;
            font-size: 16px;
            text-align: center;
        }
    }
</style>
