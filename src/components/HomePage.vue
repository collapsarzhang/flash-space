<template>
    <div id="home-page">
        <header-component>
            <div @click="clickSlot">{{msg}}</div>
        </header-component>
        <div id="body">
            <home-page-search-component></home-page-search-component>
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
                    <newsletter-component></newsletter-component>
                </section>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import Newsletter from '@/components/shared/Newsletter'
    import Header from '@/components/shared/Header'
    import Footer from '@/components/shared/Footer'
    import HomePageSearch from '@/components/home-page/Search'

    export default {
        name: 'HomePage',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        components: {
            'newsletter-component': Newsletter,
            'header-component': Header,
            'footer-component': Footer,
            'home-page-search-component': HomePageSearch
        },
        methods: {
            clickSlot: function() {
                console.log('clickSlot')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #home-page {
        min-height: 100vh;
        width: 100%;
        padding-top: 64px;
    }

    #body {
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
</style>
