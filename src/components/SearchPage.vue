<template>
    <div id="search-page">
        <header-component>
            <div class="header-search-wrapper">
                <span class="header-search-icon"><i class="fas fa-search"></i></span>
                <input type="text" class="header-search-input">
            </div>
        </header-component>
        <div id="body">
            <div class="result-map">
                <div id="google-map"></div>
            </div>
            <div class="result-list">
                <!--<div class="result-list-filter">-->
                    <!--<div class="simple-filter">-->
                        <!--<div class="simple-filter-left"></div>-->
                        <!--<div class="simple-filter-right"></div>-->
                    <!--</div>-->
                    <!--<div class="advanced-filter"></div>-->
                    <!--<div class="filter-actions"></div>-->
                <!--</div>-->
                <div class="result-list-panel">
                    <div class="result-list-item-wrapper" v-for="i in 5">
                        <div class="result-list-item">
                            <div class="list-item-image">
                                <carousel :perPage="1"
                                          :navigationEnabled="true"
                                          :paginationEnabled="false"
                                          :navigationNextLabel="nextButton"
                                          :navigationPrevLabel="prevButton"
                                >
                                    <slide style="background-image: url(//d1ih9tlfsfrtid.cloudfront.net/37VseQaTsqupRzmVmcQd_1.jpg);"></slide>
                                    <slide style="background-image: url(//d1ih9tlfsfrtid.cloudfront.net/GdMo6Z2qSRSOTT5BnuKF_DSC04490-2.jpg);"></slide>
                                </carousel>
                            </div>
                            <div class="list-item-info">
                                <div class="list-item-title"><b>Unique Space in Noho</b></div>
                                <div class="list-item-location"><i class="fas fa-map-marker-alt"></i>&nbsp;NoHo - New York, New York</div>
                                <div class="list-item-price"><b>from $2,400.00</b>&nbsp;daily</div>
                                <div class="list-item-size"><b>1,152 sq ft</b></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-component></footer-component>
    </div>
</template>

<script>
    import jQuery from 'jquery'
    import { Carousel, Slide } from 'vue-carousel'
    import Header from '@/components/shared/Header'
    import Footer from '@/components/shared/Footer'
    let google = window.google

    export default {
        name: 'SearchPage',
        data() {
            return {
                googleMap: undefined,
                nextButton: `<i class="fas fa-chevron-right"></i>`,
                prevButton: `<i class="fas fa-chevron-left"></i>`
            }
        },
        components: {
            Carousel,
            Slide,
            'header-component': Header,
            'footer-component': Footer
        },
        methods: {
            clickSlot: function() {
                console.log('clickSlot')
            }
        },
        mounted: function() {
            function isInViewport(element) {
                let elementTop = jQuery(element).offset().top
                let elementBottom = elementTop + jQuery(element).outerHeight()
                let viewportTop = jQuery(window).scrollTop()
                let viewportBottom = viewportTop + jQuery(window).height()

                return elementBottom > viewportTop && elementTop < viewportBottom
            }

            jQuery(window).on('resize scroll', function() {
                    if (isInViewport(jQuery('#footer'))) {
                        jQuery('.result-map').addClass('scroll-bottom')
                    } else {
                        jQuery('.result-map').removeClass('scroll-bottom')
                    }
            })

            this.googleMap = new google.maps.Map(document.getElementById('google-map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        'featureType': 'landscape',
                        'stylers': [
                            {
                                'hue': '#FFBB00'
                            },
                            {
                                'saturation': 43.400000000000006
                            },
                            {
                                'lightness': 37.599999999999994
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    },
                    {
                        'featureType': 'road.highway',
                        'stylers': [
                            {
                                'hue': '#FFC200'
                            },
                            {
                                'saturation': -61.8
                            },
                            {
                                'lightness': 45.599999999999994
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    },
                    {
                        'featureType': 'road.arterial',
                        'stylers': [
                            {
                                'hue': '#FF0300'
                            },
                            {
                                'saturation': -100
                            },
                            {
                                'lightness': 51.19999999999999
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    },
                    {
                        'featureType': 'road.local',
                        'stylers': [
                            {
                                'hue': '#FF0300'
                            },
                            {
                                'saturation': -100
                            },
                            {
                                'lightness': 52
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    },
                    {
                        'featureType': 'water',
                        'stylers': [
                            {
                                'hue': '#0078FF'
                            },
                            {
                                'saturation': -13.200000000000003
                            },
                            {
                                'lightness': 2.4000000000000057
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    },
                    {
                        'featureType': 'poi',
                        'stylers': [
                            {
                                'hue': '#00FF6A'
                            },
                            {
                                'saturation': -1.0989010989011234
                            },
                            {
                                'lightness': 11.200000000000017
                            },
                            {
                                'gamma': 1
                            }
                        ]
                    }
                ]
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #search-page {
        min-height: 100vh;
        width: 100%;
        padding-top: 64px;
        .header-search-wrapper {
            position: relative;
            width: 100%;
            max-width: 480px;
            margin: 0 auto;
            .header-search-input {
                appearance: none;
                outline: none;
                border: 1px solid #999;
                border-radius: 2px;
                margin: 13px 0;
                line-height: 36px;
                padding: 0 0 0 48px;
                width: 100%;
                display: block;
                background: #fff;
                font-size: 14px;
            }
            .header-search-icon {
                display: block;
                position: absolute;
                top: 0;
                line-height: 64px;
                z-index: 1;
                left: 20px;
                font-size: 16px;
            }
        }
        #body {
            position: relative;
            background-color: $background-color;
            .result-map {
                position: fixed;
                top: 64px;
                left: 0;
                width: 35%;
                height: calc(100vh - 64px);
                &.scroll-bottom {
                    position: absolute;
                    top: auto;
                    bottom: 0;
                }
                #google-map {
                    width: 100%;
                    height: 100%;
                }
            }
            .result-list {
                width: 65%;
                margin-left: 35%;
                min-height: calc(100vh - 64px);
                .result-list-filter {
                    position: relative;
                    background-color: #fff;
                    .simple-filter {
                        display: flex;
                        border-bottom: 1px solid #ddd;
                        .simple-filter-left {
                            width: calc(100% - 304px);
                            border-right: 1px solid #ddd;
                            padding: 16px 24px;
                        }
                        .simple-filter-right {
                            padding: 16px 24px;
                            width: 304px;
                        }
                    }
                }
                .result-list-panel {
                    position: relative;
                    padding: 8px 16px;
                    .result-list-item-wrapper {
                        display: inline-block;
                        width: 50%;
                        padding: 8px;
                        .result-list-item {
                            background: #fff;
                            box-shadow: 0 2px 6px rgba(0,0,0,0.2);
                            cursor: pointer;
                            &:hover {
                                box-shadow: 0 4px 8px rgba(0,0,0,0.4);
                            }
                            .list-item-image {
                                height: 256px;
                                .VueCarousel-slide {
                                    height: 256px;
                                    background-size: cover;
                                    background-position: center center;
                                }
                            }
                            .list-item-info {
                                position: relative;
                                padding: 16px 16px 20px;
                                .list-item-title {
                                    margin-top: 4px;
                                    font-size: 14px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                                .list-item-location {
                                    margin-top: 4px;
                                    font-size: 10px;
                                    color: #999;
                                    font-weight: 400;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                }
                                .list-item-price {
                                    margin-top: 8px;
                                    font-size: 16px;
                                }
                                .list-item-size {
                                    position: absolute;
                                    font-size: 12px;
                                    right: 8px;
                                    bottom: 8px;
                                    vertical-align: top;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
