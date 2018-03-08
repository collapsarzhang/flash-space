<template>
    <div id="search-page">
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
        <div id="body">
            <div class="home-page-search">
                <div class="image"></div>
                <div class="content">
                    <div class="header">Find Space</div>
                    <div class="sub-header">Discover the perfect short-term rental for any occasion</div>
                    <div class="main-search">
                        <div class="search-form">
                            <div class="form-item location">
                                <div class="form-item-icon location-icon"></div>
                                <input type="text" placeholder="Where do you want your space?">
                            </div>
                            <div class="form-item project-type">
                                <div class="selection">
                                    <div class="placeholder">What is your project?</div>
                                    <div class="selected">
                                        <div class="name"></div>
                                    </div>
                                    <div class="form-item-icon selection-icon"></div>
                                </div>
                                <div class="dropdown" v-show="false">
                                    <div class="item" v-for="i in [1,2,3,4]">
                                        <div class="name">Showroom</div>
                                        <ul class="examples">
                                            <li>
                                                <span>Fashion Showroom</span>
                                            </li>
                                            <li>
                                                <span>Shopping Mall</span>
                                            </li>
                                            <li>
                                                <span>Etc.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="form-submit">Search</div>
                        </div>
                        <div class="seperator">or better yet</div>
                        <a class="concierge-button" href="/concierge">Have your special Concierge find the space</a>
                    </div>
                </div>
                <div class="sub-search">
                    <ul class="locations">
                        <li v-for="i in ['Vancouver', 'Toronto', 'Hong Kong', 'Shanghai', 'Beijing']">
                            <a href="#">{{i}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="home-page-feature">
                <section class="home-page-section">
                    <h3>A pop-up shop helps build your brand, cultivate awareness and increase sales</h3>
                    <h3>Storefront helps you find the right space in three easy steps:</h3>
                </section>
                <section class="home-page-section flex-item">
                    <div class="feature-element">
                        <img src="https://storefront.cdn.prismic.io/storefront/a7b0ad7b695c7dbac4799d9b1095e359a121d2f7_find.png" alt="">
                        <div class="content">
                            <div class="title">Choose a location</div>
                            <p>Storefront features temporary rentals in areas with high foot traffic and visibility to give your pop-up shop maximum exposure.</p>
                        </div>
                    </div>
                    <div class="feature-element">
                        <img src="https://storefront.cdn.prismic.io/storefront/0bc319a10c03412d9628bfb21fb422a63949a9f9_connect.png" alt="">
                        <div class="content">
                            <div class="title">Connect</div>
                            <p>Find spaces that meet your criteria. Our Storefront team is here to assist you.</p>
                        </div>
                    </div>
                    <div class="feature-element">
                        <img src="https://storefront.cdn.prismic.io/storefront/8b74d88771ebd64b576849e10ccc2fa63b442fa7_pay.png" alt="">
                        <div class="content">
                            <div class="title">Launch your project</div>
                            <p>Storefront offers advice and insurance to streamline the pop-up process.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div class="home-page-redirect">
                <section class="home-page-section">
                    <a class="btn" href="#">Finding Space</a>
                    <a class="btn" href="#">Listing Space</a>
                </section>
            </div>
            <div class="home-page-join">
                <section class="home-page-section">
                    <p>
                        <img src="https://storefront.cdn.prismic.io/storefront/b3d159e2d203dd827e438166115e8b235cb5832e_icons_storefront_grey.png" alt="">
                    </p>
                    <p>
                        Join thousands of businesses growing with Storefront
                    </p>
                </section>
            </div>
            <div class="home-page-newsletter">
                <section class="home-page-section">
                    <newsletter></newsletter>
                </section>
            </div>
        </div>
        <div id="footer">

        </div>
    </div>
</template>

<script>
    import Newsletter from '@/components/shared/Newsletter'

    export default {
        name: 'HomePage',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'newsletter': Newsletter
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #search-page {
        min-height: 100vh;
        width: 100%;
        padding-top: 64px;
    }

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

    #body {
        .home-page-search {
            position: relative;
            width: 100%;
            height: 80vh;
            min-height: 600px;
            top: 0;
            text-align: center;
            .image {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url(https://d2kity9bboyw3j.cloudfront.net/assets/images/main/home-01-98c50d72.jpg) center center;
                background-size: cover;
                transition: opacity 0.8s ease;
            }
            .content {
                position: absolute;
                bottom: 120px;
                width: 100%;
            }
            .header {
                color: #fff;
                font-size: 64px;
                font-weight: 700;
                vertical-align: top;
                text-shadow: 0 0 10px #4a494b;
            }
            .sub-header {
                color: #fff;
                font-size: 20px;
                font-weight: 400;
                text-shadow: 0 0 10px #000;
            }
            .main-search {
                max-width: 680px;
                padding: 20px;
                margin: 10px auto;
                .search-form {
                    width: 768px;
                    text-align: left;
                    margin-bottom: 16px;
                    .form-item {
                        position: relative;
                        float: left;
                        height: 60px;
                        .form-item-icon {
                            position: absolute;
                            top: 0;
                            width: 20px;
                            height: 100%;
                            background-size: 100%;
                            background: no-repeat center center;
                            margin: auto;
                            font-size: 80px;
                            text-align: center;
                            color: inherit;
                        }
                        input {
                            width: 100%;
                            height: 100%;
                            padding-left: 48px;
                            border: none;
                            background: none;
                            font-size: 14px;
                        }
                    }
                    .location {
                        width: 320px;
                        height: 60px;
                        background: #fff;
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;
                        .location-icon {
                            left: 16px;
                            background-image: url(https://d2kity9bboyw3j.cloudfront.net/assets/images/icons/icons_location-16390558.png);
                        }
                    }
                    .project-type {
                        width: 250px;
                        height: 60px;
                        margin-left: 1px;
                        .selection {
                            position: relative;
                            height: 100%;
                            width: 100%;
                            cursor: pointer;
                            background-color: #fff;
                            border-top-right-radius: 4px;
                            border-bottom-right-radius: 4px;
                            .placeholder {
                                color: #999;
                                padding-left: 24px;
                                font-size: 14px;
                                line-height: 60px;
                            }
                            .selected {
                                position: absolute;
                                left: 0;
                                top: 0;
                                padding-left: 24px;
                                height: 100%;
                                overflow: hidden;
                                white-space: nowrap;
                                right: 50px;
                                line-height: 60px;
                                font-weight: bold;
                                &::after {
                                    content: '';
                                    display: block;
                                    position: absolute;
                                    right: 0;
                                    top: 0;
                                    height: 100%;
                                    width: 30px;
                                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0), #fff);
                                }
                            }
                            .selection-icon {
                                right: 24px;
                                background-image: url(https://d2kity9bboyw3j.cloudfront.net/assets/images/icons/icons_arrow_down-b31c90a8.png);
                            }
                        }
                        .dropdown {
                            z-index: 100;
                            position: relative;
                            .item {
                                background: #f5f5f5;
                                cursor: pointer;
                                border-left: 4px solid $primary-color;
                                margin-top: 1px;
                                position: relative;
                                height: 72px;
                                &:last-child {
                                    border-bottom-right-radius: 4px;
                                    border-bottom-left-radius: 4px;
                                }
                                .name {
                                    position: absolute;
                                    font-weight: bold;
                                    font-size: 16px;
                                    width: 110px;
                                    left: 20px;
                                    top: 0;
                                    color: #4a494b;
                                    line-height: 72px;
                                }
                                ul.examples {
                                    position: absolute;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    color: #999;
                                    right: 20px;
                                    width: 120px;
                                    padding: 0;
                                    margin: 0;
                                    list-style-type: none;
                                    font-size: 13px;
                                    line-height: 16px;
                                    li {
                                        &::before {
                                            content: '-';
                                            padding-right: 3px;
                                            display: table-cell;
                                        }
                                        span {
                                            display: table-cell;
                                        }
                                    }
                                }
                            }
                            .item:hover {
                                background: #fff;
                                .name {
                                    color: $primary-color;
                                }
                            }
                        }
                    }
                    .form-submit {
                        width: 116px;
                        height: 60px;
                        font-size: 16px;
                        margin-left: 8px;
                        line-height: 44px;
                        padding: 8px 16px;
                        border-radius: 4px;
                        display: inline-block;
                        cursor: pointer;
                        position: relative;
                        vertical-align: middle;
                        text-align: center;
                        transition: border-color 0.1s ease, color 0.1s ease, background 0.1s ease;
                        color: #fff;
                        background-color: $primary-color;
                        border: 1px solid $primary-color;
                    }
                }
                .seperator {
                    position: relative;
                    width: 466px;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                    margin: 0 auto 24px;
                    &::before, &::after {
                        position: absolute;
                        top: 50%;
                        height: 1px;
                        background: #fff;
                        content: '';
                    }
                    &::before {
                        right: calc(50% + 60px);
                        left: 0;
                    }
                    &::after {
                        left: calc(50% + 60px);
                        right: 0;
                    }
                }
                .concierge-button {
                    padding: 16px 24px;
                    border-radius: 2px;
                    font-size: 14px;
                    line-height: initial;
                    font-weight: 400;
                    display: inline-block;
                    cursor: pointer;
                    user-select: none;
                    overflow: hidden;
                    position: relative;
                    vertical-align: middle;
                    text-align: center;
                    transition: border-color 0.1s ease, color 0.1s ease, background 0.1s ease, opacity 0.2s ease;
                    color: #4a494b;
                    background: #fff;
                    border: 1px solid #ddd;
                }
            }
            .sub-search {
                position: absolute;
                bottom: 0;
                width: 100%;
                color: #fff;
                z-index: 2;
                right: 0;
                left: 0;
                background: rgba(0, 0, 0, 0.6);
                ul.locations {
                    list-style: none;
                    padding: 10px 0;
                    li {
                        display: inline-block;
                        padding: 5px 20px;
                        a {
                            color: #fff;
                        }
                    }
                }
            }
        }
        .home-page-feature {
            .home-page-section {
                .feature-element {
                    width: calc((100% - 64px)/3);
                    margin: 0 16px;
                    &:first-child {
                        margin-left: 0;
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                    .content {
                        margin-top: 16px;
                        .title {
                            margin-bottom: 16px;
                            font-size: 24px;
                        }
                    }
                }
            }
        }
        .home-page-redirect {
            .btn + .btn {
                margin-left: 16px;
            }
        }
    }

    #footer {
        background: $invert-color;
        padding: 40px;
        color: #fff;
    }
</style>
