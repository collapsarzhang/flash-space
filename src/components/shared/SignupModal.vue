<template>
    <modal-component :show="show" @close="close">
        <div class="modal-title"><b>Register</b></div>
        <form class="register-form">
            <div class="form-element-wrapper required-element">
                <div class="form-element-title"><b>Name</b></div>
                <div class="form-element-input first-name">
                    <input type="text" name="first-name" placeholder="First Name" v-model="user.firstName">
                </div>
                <div class="form-element-input last-name">
                    <input type="text" name="last-name" placeholder="Last Name" v-model="user.lastName">
                </div>
            </div>
            <div class="form-element-wrapper required-element">
                <div class="form-element-title"><b>Business Name</b></div>
                <div class="form-element-input">
                    <input type="text" name="business-name" placeholder="Business Name" v-model="user.businessName">
                </div>
            </div>
            <div class="form-element-wrapper required-element">
                <div class="form-element-title"><b>Phone Number</b></div>
                <div class="form-element-input">
                    <input type="text" name="phone-number" placeholder="Phone Number" v-model="user.phoneNumber">
                </div>
            </div>
            <div class="form-element-wrapper required-element">
                <div class="form-element-title"><b>Email</b></div>
                <div class="form-element-input">
                    <input type="email" name="email" placeholder="Email" v-model="user.email">
                </div>
            </div>
            <div class="form-element-wrapper required-element">
                <div class="form-element-title"><b>Password</b></div>
                <div class="form-element-input">
                    <input type="password" name="password" placeholder="Password" v-model="user.password">
                </div>
            </div>
            <div class="btn signup-button" @click="signup"><b>Sign up</b></div>
        </form>
        <div class="signup-disclaimer">
            <span>Signing up means you agree to TheFlashSpace's</span>&nbsp;
            <span><a href="/terms">terms and conditions</a></span>&nbsp;
            <span>and</span>&nbsp;
            <span><a href="/privacy">privacy policy</a></span>
            <span>.</span>
        </div>
    </modal-component>
</template>

<script>
    import Modal from '@/components/shared/Modal'
    export default {
        name: 'SignupModal',
        props: ['show'],
        data() {
            return {
                user: {
                    firstName: '',
                    lastName: ''
                }
            }
        },
        components: {
            'modal-component': Modal
        },
        methods: {
            close: function () {
                this.$emit('close')
            },
            signup: function () {
                this.close()
            }
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
    .register-form {
        margin-bottom: 40px;
        .form-element-wrapper {
            width: 100%;
            position: relative;
            padding: 16px;
            &.required-element {
                .form-element-title::before {
                    content: '*';
                    color: $error-color;
                    position: absolute;
                    left: 0;
                    width: 24px;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
            .form-element-title {
                margin-bottom: 16px;
                font-size: 14px;
            }
            .form-element-input {
                width: 100%;
                &.first-name {
                    display: inline-block;
                    margin-right: 4px;
                    width: calc(50% - 6px);
                }
                &.last-name {
                    display: inline-block;
                    margin-left: 4px;
                    width: calc(50% - 6px);
                }
                input {
                    width: 100%;
                    font-size: 14px;
                }
            }
        }
        .signup-button {
            display: block;
            margin: auto;
            max-width: 75%;
            padding: 16px;
            font-size: 16px;
            text-align: center;
        }
    }
    .signup-disclaimer {
        background: $background-color;
        margin: -16px;
        margin-top: 0;
        padding: 16px;
    }
</style>
