<template>
    <div id="header">
        <div class="nav-item first-item">
            <a class="logo">
                <img src="~@/assets/sf.png" alt="">
            </a>
        </div>
        <div class="nav-item expand-item">
            search
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
        <div class="flex-item">
            <div class="nav-item">
                Sign Up
            </div>
            <div class="nav-item">
                Login
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data() {
            return {}
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
        font-style: 14px;
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
            &.first-item {
                padding-left: 24px;
            }
            &.expand-item {
                flex-grow: 1;
            }
            &:hover {
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
    }
</style>
