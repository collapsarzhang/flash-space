<template>
    <div id="footer">
        <div class="footer-content flex-item">
            <div class="footer-column">
                <div class="footer-item"><a href="#">About Us</a></div>
                <div class="footer-item"><a href="#">Blog</a></div>
            </div>
            <div class="footer-column">
                <div class="footer-item"><a href="#">Terms of Service</a></div>
                <div class="footer-item"><a href="#">Privacy</a></div>
            </div>
            <div class="footer-column contact-info">
                <div class="address contact-info-item">Vancouver</div>
                <div class="phone contact-info-item">+1 604 888 8888</div>
                <div class="hour contact-info-item">Mon-Fri, 9am - 7pm PST</div>
            </div>
            <div class="footer-column social-info">
                <div class="footer-item">
                    <img class="footer-logo" src="https://d2kity9bboyw3j.cloudfront.net/assets/images/brand/storefront_logo_white-7ec6d234.png">
                </div>
                <div class="footer-item">
                    <div class="social-item">
                        <i class="fab fa-youtube"></i>
                    </div>
                    <div class="social-item">
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div class="social-item">
                        <i class="fab fa-weixin"></i>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-copyright">
            <p>© {{(new Date()).getFullYear()}} TheFlashSpace. All rights reserved.</p>
            <!--<p></p>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #footer {
        background: $invert-color;
        padding: 40px 24px;
        color: #fff;
        .footer-content {
            width: 100%;
            font-size: 14px;
            max-width: 1024px;
            margin: 0 auto;
            .footer-column {
                width: calc((100% - 24px)/3);
                padding: 8px 0;
                /*height: 500px;*/
                /*background: grey;*/
                .footer-item {
                    font-size: 15px;
                    a {
                        color: #fff;
                        border-bottom: 2px solid transparent;
                        transition: border 0.2s ease;
                        &:hover {
                            border-color: $primary-color;
                        }
                    }
                }
                .footer-item + .footer-item {
                    margin-top: 16px;
                }
            }
            .footer-column + .footer-column {
                margin-left: 8px;
            }
            .contact-info {
                text-align: center;
                .contact-info-item {
                    font-size: 13px;
                }
                .contact-info-item + .contact-info-item {
                    margin-top: 16px;
                }
            }
            .social-info {
                text-align: center;
                .footer-logo {
                    height: 25px;
                }
                .social-item {
                    display: inline-block;
                    width: 30px;
                    height: 30px;
                    line-height: 28px;
                    margin: 2px;
                    text-align: center;
                    color: #fff;
                    border-radius: 50%;
                    border: 1px solid #fff;
                    transition: background 0.2s ease, color 0.2s ease;
                    cursor: pointer;
                    &:hover {
                        color: $invert-color;
                        background: #fff;
                    }
                }
            }
        }
        .footer-copyright {
            width: 100%;
            font-size: 14px;
            max-width: 1024px;
            margin: 10px auto 0;
            border-top: 2px solid #999;
            padding-top: 30px;
            p {
                margin: 0;
                font-size: 12px;
                text-align: center;
                display: block;
                color: #999;
            }
            p + p {
                margin-top: 8px;
            }
        }
    }
</style>
