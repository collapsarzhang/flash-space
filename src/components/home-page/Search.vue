<template>
    <div class="home-page-search">
        <div class="image"></div>
        <div class="content">
            <div class="header">Find Space</div>
            <div class="sub-header">Discover the perfect short-term rental for any occasion</div>
            <div class="main-search">
                <div class="search-form">
                    <div class="form-item location">
                        <div class="form-item-icon location-icon"></div>
                        <input v-model="searchLocation"
                               ref="searchLocation"
                               @keyup="updatePlaceResult"
                               @focus="resetSearchLocation"
                               @blur="resetSearchLocationIfNotSelected"
                               type="text"
                               placeholder="Where do you want your space?">
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
                    <div class="form-item project-type">
                        <div class="selection" @click.stop.prevent="toggleProjectTypeDropdown">
                            <div class="placeholder" v-show="!searchProjectType">What is your project?</div>
                            <div class="selected" v-if="searchProjectType">
                                <div class="name">{{searchProjectType.name}}</div>
                            </div>
                            <div class="form-item-icon selection-icon"></div>
                        </div>
                        <div class="dropdown" v-show="showProjectTypeDropdown">
                            <div class="item" v-for="projectType in projectTypes" :key="projectType.name" @click.prevent="selectProjectType($event, projectType)">
                                <div class="name">{{projectType.name}}</div>
                                <ul class="examples">
                                    <li v-for="example in projectType.examples" :key="example">
                                        <span>{{example}}</span>
                                    </li>
                                    <li>
                                        <span>Etc.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="form-submit" @click.stop.prevent="goToSearchPage">Search</div>
                </div>
                <div class="seperator">or better yet</div>
                <a class="concierge-button" href="/concierge">Have your special Concierge find the space</a>
            </div>
        </div>
        <div class="sub-search">
            <ul class="locations">
                <li v-for="i in ['Vancouver', 'Toronto', 'Hong Kong', 'Shanghai', 'Beijing']" :key="i">
                    <a href="#">{{i}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import jQuery from 'jquery'
    import _ from 'lodash'
    let google = window.google
    export default {
        name: 'HomePageSearch',
        data() {
            return {
                showProjectTypeDropdown: false,
                searchLocation: '',
                searchProjectType: undefined,
                locationPredications: undefined,
                activePrediction: undefined,
                selectedPrediction: undefined,
                projectTypes: [
                    {
                        name: 'Retail',
                        examples: [
                            'Pop-up Store',
                            'Shopping Mall'
                        ]
                    },
                    {
                        name: 'Showroom',
                        examples: [
                            'Fashion Show',
                            'Private Sale'
                        ]
                    },
                    {
                        name: 'Event',
                        examples: [
                            'Product Launch',
                            'Wedding'
                        ]
                    },
                    {
                        name: 'Art',
                        examples: [
                            'Art Opening',
                            'Photo & Film'
                        ]
                    }
                ]
            }
        },
        methods: {
            selectProjectType(event, type) {
                this.searchProjectType = type
            },
            toggleProjectTypeDropdown(event) {
                this.showProjectTypeDropdown = !this.showProjectTypeDropdown
            },
            goToSearchPage() {
                console.log(this.searchLocation, this.searchProjectType)
            },
            selectPrediction(predition) {
                this.searchLocation = predition.description
                this.selectedPrediction = predition
                this.activePrediction = undefined
                this.locationPredications = undefined
                this.$refs.searchLocation.blur()
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
            updatePlaceResult: _.debounce(function(event) {
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
            }, 500)
        },
        mounted: function() {
            jQuery('body').click(() => {
                this.showProjectTypeDropdown = false
            })
            jQuery(window).blur(() => {
                this.showProjectTypeDropdown = false
            })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
                    position: relative;
                    width: 320px;
                    height: 60px;
                    background: #fff;
                    border-top-left-radius: 4px;
                    border-bottom-left-radius: 4px;
                    .location-icon {
                        left: 16px;
                        background-image: url(https://d2kity9bboyw3j.cloudfront.net/assets/images/icons/icons_location-16390558.png);
                    }
                    .location-prediction {
                        position: absolute;
                        left: 15px;
                        top: 75px;
                        min-width: 305px;
                        background-color: #fff;
                        z-index: 9;
                        .prediction-item {
                            cursor: pointer;
                            padding: 8px 14px;
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
                            height: 68px;
                            line-height: 68px;
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
</style>
