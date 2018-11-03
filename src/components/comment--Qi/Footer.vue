<template>
  <div  >
    <div class="bottom">

      <div class="footer">
        <div class="w1200">
          <div class="footer_tel">
            <div class="tel">
              来电咨询<br>
             xxx-xxxx
            </div>
            <ul>
              <li>全方位的购买咨询</li>|
              <li>精准的产品推荐</li>|
              <li>专业支持的售后咨询</li>|
              <li>电商业务开展咨询</li>
            </ul>
          </div>

          <div class="footer_copyright">
            <p>软件企业编号© 2003-2017 Shop,Inc.All rights reserved.</p>
            <p class="beian"><a href="#"><img src="../../assets/ba.png"/>&nbsp;沪公网安备 xxxxxxxxxx号</a> <a href="#"><img src="../../assets/gs.gif"/>&nbsp;上海工商</a></p>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    font-family: "microsoft yahei";
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .w1200 {
    width: 1200px;
    margin: 0 auto;
  }
  .w1200:after{
    content: "";
    width: 0;
    height: 0;
    display: block;
    clear: both;
  }

  .bottom .register h2 {
    text-align: center;
    font-size: 24px;
  }

  .bottom .register a {
    display: block;
    width: 170px;
    height: 45px;
    line-height: 44px;
    color: #fff;
    background: #14A8FF;
    border-radius: 5px;
    margin: 30px auto;
    font-size: 18px;
    text-align: center;
  }

  .bottom .footer {

    background: #000000;
  }

  .bottom .footer .w1200 {
    padding: 0 10px
  }

  .bottom .footer .footer_top ul li {
    float: left;
    width: 278px;
    height: 78px;
    line-height: 78px;
    border: 1px solid #333;
    text-indent: 98px;
    color: #aaaaaa;
    margin-right: 20px;
  }

  .bottom .footer .footer_top ul li:last-child {
    margin-right: 0;
  }




  .bottom .footer .footer_tel {
    border-bottom: 1px solid #333;
    height: 90px;
    margin: 0 auto;
    width: 1180px;
    padding-top: 30px;
    color: #aaa;
  }

  .bottom .footer .footer_tel .tel {
    float: left;
    font-size: 16px;
    width: 180px;
    height: 65px;
    background: url(../../assets/foot_icon5.png) no-repeat 20px 0;
    padding-left: 100px;
  }

  .bottom .footer .footer_tel ul li {
    height: 90px;
    line-height: 60px;
    display: inline-block;
    padding: 0 20px;
  }

  .bottom .footer .footer_tel ul li:first-child {
    padding-left: 0;
  }



  .bottom .footer .footer_down .left h3,
  .bottom .footer .footer_down .flink h3 {
    font-size: 16px;
    color: #fff;
    font-weight: normal;
  }

  .bottom .footer .footer_down .left p,
  .bottom .footer .footer_down .flink p {
    font-size: 14px;
    padding-top: 20px;
  }

  .bottom .footer .footer_down .left p a,
  .bottom .footer .footer_down .flink p a {
    font-size: 14px;
    color: #888;
    margin: 0 20px 15px 0;
    white-space: nowrap;
    display: inline-block;
  }

  .bottom .footer .footer_down .left p a:hover,
  .bottom .footer .footer_down .flink p a:hover {
    color: #fff;
  }


  .bottom .footer .footer_down .right ul li {
    float: left;
    width: 120px;
    height: 150px;
    margin-right: 40px;
    text-align: center;
  }

  .bottom .footer .footer_down .right ul li:last-child {
    margin-right: 0;
  }

  .bottom .footer .footer_down .right ul li h3 {
    color: #888;
    padding-top: 15px;
    font-weight: normal;
    font-size: 14px;
    text-align: center;
  }

  .bottom .footer .footer_copyright {
    padding: 8px 0;
  }

  .bottom .footer .footer_copyright p {

    color: #888;
    font-size: 14px;
  }

  .bottom .footer .footer_copyright p.beian a {
    color: #888;
    padding-right: 20px;
    display: inline-block;
  }

  .bottom .footer .footer_copyright p.beian a img {
    vertical-align: middle;
  }

</style>
