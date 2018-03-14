<template>
    <div id="search-page">
        <header-component>
            <div class="header-search-wrapper">
                <span class="header-search-icon"><i class="fas fa-search"></i></span>
                <input type="text" class="header-search-input"
                       v-model="searchLocation"
                       ref="searchLocation"
                       @keyup="updatePlaceResult"
                       @focus="resetSearchLocation"
                       @blur="resetSearchLocationIfNotSelected"
                       placeholder="Find A Space"
                >
                <div class="location-prediction" v-show="locationPredications">
                    <div v-for="prediction in locationPredications"
                         :key="prediction.placeId" class="prediction-item"
                         @mousedown.prevent="selectPrediction(prediction)"
                    >
                        <span class="main-part">{{prediction.mainText}}</span>
                        <span class="additional-part">{{prediction.secondaryText}}</span>
                    </div>
                </div>
            </div>
        </header-component>
        <div id="body">
            <div class="result-map">
                <div id="google-map"></div>
                <div class="map-selected-space" v-if="mapSelectedSpace">
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
                    <div class="result-list-item-wrapper" v-for="space in spaces">
                        <div class="result-list-item" @mouseover="onHoverListSpace(space)">
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
                                <div class="list-item-title"><b>{{space.title}}</b></div>
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
    import _ from 'lodash'
    import { Carousel, Slide } from 'vue-carousel'
    import Header from '@/components/shared/Header'
    import Footer from '@/components/shared/Footer'
    let google = window.google
    let activeIconURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAyVBMVEUAAABX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JdX1JeCaz/FAAAAQnRSTlMAAQIDBAUGCAkKCxASGBsiJi4vMTIzNTtCS05PUFFSV11hZ2hwdYWIiYuMm6Kyt77Aw8XIzM/X3Obo6evv8fP1+/191ZZAAAABHUlEQVQYGYXBiVaCUBQF0INBIkWDRYNhgw1mk2WWgZB4/v+j8r7FwvcYbG8YnGA4juPxMHDQxB5kzGUDG7X8iJrIR43ukoasiwp/yZLMR4kdsSKyYbqlkoaeZXn9lMoABmdJMXWhuF8UmQPdCUXiIuemFAF0jxQXKPQphtC9U3goeBRj6GIKrFkUMXRzCqxZFHPoJhQdFDyKD+hGFD0UQoon6I4okjZybkpxDF3rl+KzDcWdUiy2YLimkvQ6gHeRULmByclYkW2j5I4V9yhzWeGh4oElI1TtsGQXNZ5peEEdn4Y91Hql5g319qk5QIMJC1M0OWQhQKNv5mYWGp0yd4Zm1g+VeQsbnFO5xCatlCsLGxuFXLnCP8LZrI+SP2gDdbDPAokfAAAAAElFTkSuQmCC'
    let inactiveIconURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAyVBMVEUAAABJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFdJUFcd3jOOAAAAQnRSTlMAAQIDBAUGCAkKCxASGBsiJi4vMTIzNTtCS05PUFFSV11hZ2hwdYWIiYuMm6Kyt77Aw8XIzM/X3Obo6evv8fP1+/191ZZAAAABHUlEQVQYGYXBiVaCUBQF0INBIkWDRYNhgw1mk2WWgZB4/v+j8r7FwvcYbG8YnGA4juPxMHDQxB5kzGUDG7X8iJrIR43ukoasiwp/yZLMR4kdsSKyYbqlkoaeZXn9lMoABmdJMXWhuF8UmQPdCUXiIuemFAF0jxQXKPQphtC9U3goeBRj6GIKrFkUMXRzCqxZFHPoJhQdFDyKD+hGFD0UQoon6I4okjZybkpxDF3rl+KzDcWdUiy2YLimkvQ6gHeRULmByclYkW2j5I4V9yhzWeGh4oElI1TtsGQXNZ5peEEdn4Y91Hql5g319qk5QIMJC1M0OWQhQKNv5mYWGp0yd4Zm1g+VeQsbnFO5xCatlCsLGxuFXLnCP8LZrI+SP2gDdbDPAokfAAAAAElFTkSuQmCC'
    let icon = {
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(36, 36),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 36)
    }
    let inactiveIcon = _.assign({url: inactiveIconURL}, icon)
    let activeIcon = _.assign({url: activeIconURL}, icon)

    export default {
        name: 'SearchPage',
        data() {
            return {
                googleMap: undefined,
                markers: [],
                spaces: [],
                mapSelectedSpace: undefined,
                searchLocation: 'Vancouver, BC, Canada',
                locationPredications: undefined,
                activePrediction: undefined,
                selectedPrediction: undefined,
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
            },
            setMarker: function(space) {
                let marker = new google.maps.Marker({
                    position: {lat: space.lat, lng: space.lng},
                    map: this.googleMap,
                    icon: inactiveIcon
                })
                marker.set('spaceId', space.spaceId)
                marker.addListener('click', () => {
                    this.unSelectMapSpace()
                    this.mapSelectedSpace = this.getSpace(space.spaceId)
                    marker.setIcon(activeIcon)
                })
                this.markers.push(marker)
            },
            getSpace(spaceId) {
                return {}
            },
            onHoverListSpace(space) {
                this.unSelectMapSpace()
                _.forEach(this.markers, (m) => {
                    if (m.get('spaceId') === space.spaceId) {
                        m.setIcon(activeIcon)
                    }
                })
            },
            unSelectMapSpace() {
                this.mapSelectedSpace = undefined
                _.forEach(this.markers, (m) => {
                    m.setIcon(inactiveIcon)
                })
            },
            deleteMarkers() {
                _.forEach(this.markers, (marker) => {
                    marker.setMap(null)
                })
                this.markers = []
            },
            selectPrediction(predition) {
                this.searchLocation = predition.description
                this.selectedPrediction = predition
                this.activePrediction = undefined
                this.locationPredications = undefined
                this.$refs.searchLocation.blur()
                this.updateMap()
            },
            resetSearchLocation() {
                this.searchLocation = ''
                this.selectedPrediction = undefined
                this.activePrediction = undefined
                this.locationPredications = undefined
            },
            resetSearchLocationIfNotSelected() {
                if (!this.selectedPrediction) {
                    this.resetSearchLocation()
                }
            },
            updateMap() {
                let service = new google.maps.places.PlacesService(this.googleMap)
                service.getDetails({placeId: this.selectedPrediction.placeId}, (result, status) => {
                    if (status === google.maps.places.PlacesServiceStatus.OK) {
                        this.googleMap.fitBounds(result.geometry.viewport)
                        this.updateMapData(result.geometry.viewport)
                        // console.log(result.geometry.viewport.getNorthEast().lat())
                    }
                })
            },
            updateMapData(bounds) {
                this.deleteMarkers()
                let xMin = bounds.getSouthWest().lng()
                let xMax = bounds.getNorthEast().lng()
                let yMin = bounds.getNorthEast().lat()
                let yMax = bounds.getSouthWest().lat()
                let randomSpaces = []
                for (let i = 0; i < 10; i++) {
                    let lat = yMin + (Math.random() * (yMax - yMin))
                    let lng = xMin + (Math.random() * (xMax - xMin))
                    randomSpaces.push({
                        lat: lat,
                        lng: lng,
                        title: lat + ' | ' + lng,
                        spaceId: i
                    })
                }
                _.forEach(randomSpaces, (randomSpace) => {
                    this.setMarker(randomSpace)
                })
                this.spaces = randomSpaces
            },
            updatePlaceResult: _.debounce(function (event) {
                if (this.searchLocation.length === 0) {
                    this.locationPredications = undefined
                }
                if (event.keyCode !== 13 && this.searchLocation.length > 0) {
                    let service = new google.maps.places.AutocompleteService({types: 'geocode'})
                    service.getPlacePredictions({input: this.searchLocation}, (predictions, status) => {
                        if (status === google.maps.places.PlacesServiceStatus.OK) {
                            this.locationPredications = []
                            _.forEach(predictions, (prediction) => {
                                this.locationPredications.push(
                                    {
                                        placeId: prediction['place_id'],
                                        description: prediction['description'],
                                        mainText: prediction['structured_formatting']['main_text'],
                                        secondaryText: prediction['structured_formatting']['secondary_text']
                                    }
                                )
                            })
                            this.activePrediction = this.locationPredications[0]
                        }
                    })
                }
            }, 200)
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

            if (this.$route.query.location && this.$route.query.location.length > 0) {
                this.searchLocation = this.$route.query.location
            }

            this.googleMap = new google.maps.Map(document.getElementById('google-map'), {
                center: {lat: 49.246292, lng: -123.116226},
                zoom: 12,
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
                styles: [
                    {
                        'featureType': 'road.arterial',
                        'elementType': 'labels',
                        'stylers': [
                            {
                                'visibility': 'off'
                            }
                        ]
                    },
                    {
                        'featureType': 'road.highway',
                        'elementType': 'labels',
                        'stylers': [
                            {
                                'visibility': 'off'
                            }
                        ]
                    },
                    {
                        'featureType': 'road.local',
                        'stylers': [
                            {
                                'visibility': 'off'
                            }
                        ]
                    }
                ]
            })
            this.googleMap.addListener('click', () => {
                this.unSelectMapSpace()
            })

            let geocoderService = new google.maps.Geocoder()
            geocoderService.geocode({address: this.searchLocation}, (result, status) => {
                if (status === google.maps.GeocoderStatus.OK && result.length > 0) {
                    let viewport = result[0].geometry.viewport
                    this.googleMap.fitBounds(viewport)
                    this.updateMapData(viewport)
                }
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
            .location-prediction {
                position: absolute;
                left: 0;
                top: 64px;
                min-width: 100%;
                background-color: #fff;
                z-index: 9;
                .prediction-item {
                    cursor: pointer;
                    padding: 8px 14px;
                    line-height: 20px;
                    &.active-item {
                        color: #fff;
                        background-color: $primary-color;
                    }
                    &:hover {
                        color: #fff;
                        background-color: $primary-color;
                    }
                    .main-part {
                        font-size: 14px;
                        margin-right: 10px;
                    }
                    .additional-part {
                        font-size: 12px;
                        opacity: .69;
                    }
                }
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
                .map-selected-space {
                    position: absolute;
                    bottom: 10px;
                    left: 10px;
                    width: 90%;
                    max-width: 360px;
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
                    }
                }
            }
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
</style>
