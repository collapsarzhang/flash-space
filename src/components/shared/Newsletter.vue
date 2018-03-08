<template>
    <div class="newsletter">
        <div class="label">Receive all our exclusive and special spaces!</div>
        <form class="newsletter-form" @submit.stop.prevent="submitNewsletterRegistration">
            <input name="email" type="text" placeholder="Email" v-model="emailAddress" @keyup="clearErrorMessage" :disabled="isSubmitingForm">
            <button class="btn" type="submit" v-show="!isSubmitFormSuccessful" :disabled="isSubmitingForm">
                <div class="btn-label" v-show="!isSubmitingForm">Sign up</div>
                <div class="btn-loading" v-show="isSubmitingForm">
                    <svg aria-hidden="true" data-prefix="fas" data-icon="spinner" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" class=""></path>
                    </svg>
                </div>
            </button>
            <div class="error-message" v-show="isFormSubmitFailed">Please enter a valid email address</div>
            <div class="success-message" v-show="isSubmitFormSuccessful">
                <svg aria-hidden="true" data-prefix="far" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M257.3 475.4L92.5 313.6C85.4 307 24 248.1 24 174.8 24 84.1 80.8 24 176 24c41.4 0 80.6 22.8 112 49.8 31.3-27 70.6-49.8 112-49.8 91.7 0 152 56.5 152 150.8 0 52-31.8 103.5-68.1 138.7l-.4.4-164.8 161.5a43.7 43.7 0 0 1-61.4 0zM125.9 279.1L288 438.3l161.8-158.7c27.3-27 54.2-66.3 54.2-104.8C504 107.9 465.8 72 400 72c-47.2 0-92.8 49.3-112 68.4-17-17-64-68.4-112-68.4-65.9 0-104 35.9-104 102.8 0 37.3 26.7 78.9 53.9 104.3z" class=""></path></svg>
                Thanks for subscribing
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'Newsletter',
        data() {
            return {
                emailAddress: '',
                isFormSubmitFailed: false,
                isSubmitingForm: false,
                isSubmitFormSuccessful: false
            }
        },
        methods: {
            submitNewsletterRegistration: function(event) {
                if (this.emailAddress.length > 2) {
                    this.isSubmitingForm = true
                    setTimeout(() => {
                        this.isSubmitingForm = false
                        this.isSubmitFormSuccessful = true
                    }, 2000)
                } else {
                    this.isFormSubmitFailed = true
                }
            },
            clearErrorMessage: function(event) {
                if (event.keyCode !== 13) {
                    this.isFormSubmitFailed = false
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .newsletter {
        width: 100%;
        max-width: 500px;
        margin: auto;
        .label {
            font-size: 14px;
            font-weight: bold;
            display: block;
            overflow: hidden;
            max-height: 20px;
            transition: max-height ease .5s;
            margin-bottom: 8px;
            text-align: left;
        }
        form.newsletter-form {
            display: flex;
            position: relative;
            input {
                display: flex;
                flex-grow: 1;
                width: auto;
                border: 1px solid #ddd;
                border-right: 0;
                border-radius: 2px 0 0 2px;
                &:disabled {
                    background-color: #ddd;
                }
            }
            .btn {
                padding: 0 24px;
                height: 35px;
                font-size: 14px;
                transition: all ease .5s;
                border-radius: 0 2px 2px 0;
                width: 95px;
                text-align: center;
                &:disabled {
                    cursor: default;
                }
                .btn-label {
                    display: block;
                    position: relative;
                    transition: top ease .5s;
                    top: 0;
                    line-height: 33px;
                }
                .btn-loading {
                    position: absolute;
                    top: 8px;
                    left: 24px;
                    right: 24px;
                    svg {
                        animation: spin 2s infinite linear;
                        width: 1rem;
                    }
                    @keyframes spin {
                        0% {
                            -webkit-transform: rotate(0deg);
                            transform: rotate(0deg); }
                        100% {
                            -webkit-transform: rotate(360deg);
                            transform: rotate(360deg); }
                    }
                }
            }
            .success-message {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                text-align: center;
                line-height: 32px;
                background-color: $primary-color;
                border-right: 2px;
                color: #fff;
                svg {
                    width: 1rem;
                    position: relative;
                    top: 2px;
                    margin-right: 2px;
                }
            }
            .error-message {
                position: absolute;
                top: -18px;
                left: 0;
                padding: 8px;
                color: #fff;
                font-size: 0.85rem;
                transform: translateY(-20px);
                transition: transform 0.3s 0s, opacity 0.3s 0s, visibility 0s .3s;
                background-color: $error-color;
                z-index: 9;
                &::after {
                    content: '';
                    position: absolute;
                    top: 100%;
                    left: 20px;
                    display: inline-block;
                    width: 0;
                    height: 0;
                    border: 6px solid transparent;
                    border-top-color: $error-color;
                }
            }
        }
    }
</style>
