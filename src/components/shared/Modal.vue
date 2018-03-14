<template>
    <transition name="modal">
        <div class="modal-mask" @click="close" v-show="show">
            <div class="modal-container" @click.stop>
                <div class="close-button" @click="close">
                    ×
                </div>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script>
    import jQuery from 'jquery'
    export default {
        name: 'Modal',
        props: ['show'],
        methods: {
            close: function () {
                this.$emit('close')
            }
        },
        mounted: function () {
            jQuery(document).on('keydown', (e) => {
                if (this.show && e.keyCode === 27) {
                    this.close()
                }
            })
        },
        watch: {
            show: function() {
                if (this.show === true) {
                    if (jQuery(document).height() > jQuery(window).height()) {
                        jQuery('body').addClass('no-scroll')
                    }
                } else {
                    jQuery('body').removeClass('no-scroll')
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .4);
        transition: opacity .3s ease;
        overflow-y: auto;
    }

    .modal-container {
        position: relative;
        padding: 16px;
        background-color: #fff;
        border-radius: 2px;
        width: 500px;
        top: 80px;
        margin: auto auto 80px;
        transition: all .3s ease;
        .close-button {
            position: absolute;
            top: 2px;
            right: 8px;
            font-size: 24px;
            color: #999;
            cursor: pointer;
        }
    }

    .modal-enter {
        opacity: 0;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-container,
    .modal-leave-active .modal-container {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>
