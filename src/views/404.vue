<template>
  <div class="main">
    <div class="main-wrap">
        <img src="https://c1.51jujibao.com/static/mkt/2019/08/error/img_404.png" alt="">
        <p>啊哦，页面飞到外太空去了~</p>
    </div>
  </div>
</template>


<style lang="less" scoped>
  .main {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    width: 100%;
    max-width: 375px;
    .main-wrap{
      text-align: center;
      position: absolute;
      left: 50%;
      top: 100px;
      transform: translateX(-50%);
      width: 175px;
      img{
        width: 100%;
      }
      p {
        font-size: 14px;
        color: #aaaaaa;
      }
    }
  }
</style>
