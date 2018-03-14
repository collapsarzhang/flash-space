<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #4a494b;
    }

    .flex-item {
        display: flex;
    }

    .home-page-section {
        max-width: 1024px;
        padding: 24px 0;
        margin: auto;
        text-align: center;
    }

    a {
        text-decoration: none;
        transition: color 0.2s ease;
        color: $primary-color;
    }

    input {
        appearance: none;
        outline: none;
        position: relative;
        vertical-align: top;
        display: inline-block;
        font-size: 14px;
        font-weight: 400;
        border-radius: 2px;
        border: 1px solid #ddd;
        margin: 0;
        padding: 8px;
        background: #fff;
    }

    input:focus {
        outline: none;
    }

    .btn {
        line-height: initial;
        display: inline-block;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        vertical-align: middle;
        text-align: center;
        color: #fff;
        background-color: $primary-color;
        border: 1px solid $primary-color;
        padding: 20px;
        border-radius: 4px;
        transition: background 0.1s ease;
        font-size: 18px;
        font-weight: 400;
        &:last-of-type {
            margin-right: 0;
        }
        &:hover {
            background: $primary-active-color;
        }
        &:active {
            box-shadow: inset 0px 2px 2px rgba(0,0,0,0.2);
            background: $primary-active-color;
        }
    }

    h3 {
        font-size: 24px;
    }

    .VueCarousel {
        .VueCarousel-navigation {
            .VueCarousel-navigation-button {
                color: #fff;
                padding: 8px;
                font-size: 24px;
                filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.6));
                &.VueCarousel-navigation-prev {
                    transform: translateY(-50%);
                }
                &.VueCarousel-navigation-next {
                    transform: translateY(-50%);
                }
            }
        }
    }
    
    body.no-scroll {
        position: fixed !important;
        overflow-y: scroll !important;
    }

</style>
