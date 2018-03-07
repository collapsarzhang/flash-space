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
      <section class="section-search">
        <div class="image"></div>
        <div class="content">
          <div class="header">Find Space</div>
          <div class="sub-header">Discover the perfect short-term rental for any occasion</div>
          <div class="main-search">
            <div class="search-form">
              <div class="form-item location"><input type="text" placeholder="location"></div>
              <div class="form-item project-type"><input type="text" placeholder="project type"></div>
              <div class="form-submit"></div>
            </div>
          </div>
        </div>
        <div class="sub-search"></div>
      </section>
    </div>
    <div id="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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
    box-shadow: 0px 1px 0px rgba(0,0,0,0.05);
    z-index: 99;
    .nav-item {
      display: flex;
      align-items: center;
      padding: 0 8px;
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
    .section-search {
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
        width: 100%;
        padding: 20px;
        margin: 10px auto;
        .search-form {
          width: 768px;
          margin: auto;
          .form-item {
            float: left;
            height: 60px;
          }
          .location {
            width: 320px;
          }
          .project-type {
            width: 250px;
          }
          .form-submit {
            width: 116px;
            height: 60px;
            font-size: 16px;
            margin-left: 8px;
            line-height: 44px;
            font-weight: 100;
            padding: 8px 16px;
            border-radius: 4px;
            display: inline-block;
            cursor: pointer;
            position: relative;
            vertical-align: middle;
            text-align: center;
            transition: border-color 0.1s ease,color 0.1s ease,background 0.1s ease;
            color: #fff;
            background-color: #57d497;
            border: 1px solid #57d497;
          }
        }
      }
      .sub-search {
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
  }
</style>
