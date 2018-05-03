<template>
    <div id="header">
        <div class="nav-item first-item">
            <a class="logo">
                <img src="~@/assets/sf.png" alt="">
            </a>
        </div>
        <div class="nav-item expand-item">
            <slot></slot>
        </div>
        <div class="flex-item">
            <div class="nav-item">
                Finding Space
            </div>
            <div class="nav-item">
                Listing Space
            </div>
        </div>
        <div class="nav-item">
            Need Help?
        </div>
        <div class="flex-item" v-show="!currentUser">
            <div class="nav-item" @click="showSignUpModal = true">
                Sign Up
            </div>
            <div class="nav-item" @click="showLoginModal = true">
                Login
            </div>
            <signup-modal-component :show="showSignUpModal" @close="showSignUpModal = false"></signup-modal-component>
            <login-modal-component :show="showLoginModal" @close="showLoginModal = false"></login-modal-component>
        </div>
        <div class="nav-item last-item account-nav-item" v-if="currentUser">
            <div class="account-button">
                <span><b>{{currentUser.charAt(0)}}</b></span>
                <div class="account-dropdown">
                    <div class="dropdown-group">
                        <a class="dropdown-item" href="/account">
                            <span>Account & settings</span>
                            <i class="fas fa-angle-right dropdown-item-icon"></i>
                        </a>
                        <a class="dropdown-item" @click="logout">
                            <span>Logout</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginModal from '@/components/shared/LoginModal'
    import SignupModal from '@/components/shared/SignupModal'
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: 'Header',
        data() {
            return {
                showSignUpModal: false,
                showLoginModal: false
            }
        },
        computed: mapGetters([
            'currentUser'
        ]),
        mounted() {
          // jQuery('#header').on('mouseenter', '.account-button', () => {
          //     this.accountDropdownActive = true
          // })
          //   jQuery('#header').on('mouseleave', '.account-button', (e) => {
          //       this.accountDropdownActive = false
          //   })
        },
        components: {
            'login-modal-component': LoginModal,
            'signup-modal-component': SignupModal
        },
        methods: {
            ...mapActions([
                'login',
                'logout'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #header {
        display: flex;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        background-color: #fff;
        color: #4a494b;
        font-size: 14px;
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
        z-index: 99;
        .nav-item {
            display: flex;
            align-items: center;
            padding: 0 12px;
            position: relative;
            height: 64px;
            white-space: nowrap;
            cursor: pointer;
            font-size: 14px;
            &.first-item {
                padding-left: 24px;
            }
            &.last-item {
                padding-right: 24px;
            }
            &.expand-item {
                flex-grow: 1;
                cursor: default;
            }
            &:not(.expand-item):hover {
                color: $primary-color;
            }
        }
        .logo {
            display: flex;
            align-items: center;
            height: 64px;
            white-space: nowrap;
            img {
                height: 20px;
            }
        }
        .account-button {
            position: relative;
            color: #fff;
            background-color: $background-color;
            border-radius: 50%;
            padding: 5px 0;
            width: 32px;
            height: 32px;
            text-align: center;
            font-size: 18px;
            .account-dropdown {
                display: none;
                position: absolute;
                top: 48px;
                right: -25px;
                width: 336px;
                background: #fff;
                border: 1px solid #ddd;
                .dropdown-item {
                    position: relative;
                    padding: 16px 16px 16px 32px;
                    display: block;
                    font-size: 14px;
                    text-align: left;
                    color: $invert-color;
                    &:hover {
                        background-color: $background-color;
                    }
                    .dropdown-item-icon {
                        position: absolute;
                        top: 14px;
                        right: 16px;
                        color: #ddd;
                        width: 20px;
                        height: 20px;
                    }
                }
                .dropdown-item + .dropdown-item {
                    border-top: 1px solid #ddd;
                }
            }
        }
        .account-nav-item:hover {
            .account-dropdown {
                display: block;
            }
        }
    }
</style>
