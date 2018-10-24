<template>
  <div style="margin: 0;padding: 0" class="container-fluid">
    <!--===============================================-->
    <!--头部-->
  <div class="container">
    <div id="px" class="row">
      <div class="col-lg-12 col-sm-12 col-xs-12 col-md-12">
        <p>咔嚓在线商城首页>{{user.shopType}}>{{user.shopName}}</p>
      </div>
    </div>
    <!--=====================================================-->
    <!--详情-->
    <div class="row">
     <div id="dv1" class="col-lg-6 col-md-6 col-sm-7 col-xs-11">
       <div  id="d1" >
         <img id="imge" style="margin: 0 auto" class="img-responsive" :src="user.shopImg" alt="">

         <div class="cen">
           <div @click="img1" class="ylt">
             <img  class="img-responsive" :src="user.shopImg" alt="">
           </div>
           <div @click="img2" class="ylt1">
             <img  class="img-responsive" :src="user.shopImg2" alt="">
           </div>
             <div @click ="img3" @mousedown="pa1" class="ylt">
               <img class="img-responsive" :src="user.shopImg3" alt="">
             </div>


         </div>

       </div>
       <span class="glyphicon glyphicon-chevron-right"></span>
       <span class="glyphicon glyphicon-chevron-left"></span>
     </div>
      <!--====================左侧img========================-->
      <div id="dv2" class="col-lg-6 col-md-6 col-sm-5 col-xs-12 ">
        <div id="page1">
          <span id="sh2">{{user.shopPara}}</span>
          <p>产品详情：{{user.shopifo}}</p>
        </div>
        <hr>
        <div id="shoping">
          <ul>
            <li style="width: 300px">价格：<span style="color:cornflowerblue;font-size: 24px;">RMB {{user.shopPrice}}.00</span></li>
            <li>规格：<input type="button" class="btn btn-default" id="bt2" :value="user.shopName"></li>
            <li>颜色：<input type="color" style="width: 30px;background: white;height: 30px;"></li>
            <li>库存：<span style="color: cornflowerblue ;font-size:22px">{{user.shopKC}}台</span></li>
          </ul>
          <hr>
        </div>
        <div id="z1">
          <ul>
          <li> <input class="btn btn-primary but cornflowerblue " @click="gwc" type="button" value="加入购物车"></li>
          <li>  <input  class="btn btn-default but" type="button" value="加入收藏"></li>
        </ul>


        </div>
<!--===================================右侧=======================================-->
      </div>
    </div>

  </div>
<!--========================================================================-->
    <!--腰部-->
    <div id="divsf" class="row">
      <div  class="container">
        <div id="tohard" class="col-xs-3 col-sm-4 col-md-6 col-lg-7">
          <span>{{user.shopName}}</span>
        </div>
        <div class="col-xs-9 col-sm-8 col-md-6 col-lg-5"   >
          <ul>
            <li  id="lii" @click="change(3)"><span>评论</span></li>

            <li   @click="change(2)"><span>详细参数</span></li>

            <li @click="change(1)"><span>概述</span></li>
          </ul>
        </div>
      </div>

    </div>
<!--======================================================-->
    <!--详情图-->
  <div class="row"  v-show="mura == 1" >
    <img  class="img-responsive" :src="user.IMG1" alt="">
    <img  class="img-responsive" :src="user.IMG2" alt="">
    <img  class="img-responsive" :src="user.IMG3" alt="">
  </div>
    <!--===========================================================-->
    <!--详细信息-->
    <div class="container" v-show="mura == 2">
      <div id="info" class="row">
        <div id="bigt">
          主要规格
        </div>
        <br/>
        <hr>
        <div class="c100"></div>
        <div class="dkdg">
          影像传感器
      </div>
        <div class="right">
          <table>
            <tr><td>有效像素 </td><td>约2010万有效像素</td></tr>
          </table>

        </div>
        <div class="c100"></div>
        <hr>
        <!--=================================-->
        <div class="dkdg">
          液晶屏
        </div>
        <div class="right">
          <table>
            <tr><td>液晶屏类型</td><td>3.0” Xtra Fine可折叠液晶屏（约123 万像素）</td></tr>

          </table>

        </div>
        <div class="c100"></div>
        <hr>
        <!--=================================-->
        <div class="dkdg">
          取景器
        </div>
        <div class="right">
          <table>
            <tr><td>取景器类型</td><td>XGA OLED电子取景器</td></tr>
            <tr><td>取景器总像素</td><td>	约235万像素</td></tr>
          </table>

        </div>
        <div class="c100"></div>
        <hr>

        <div class="dkdg">
          液晶屏
        </div>
        <div class="right">
          <table>
            <tr><td>液晶屏类型</td><td>3.0” Xtra Fine可折叠液晶屏（约123 万像素）</td></tr>

          </table>

        </div>
        <div class="c100"></div>
        <hr>
        <!--=========================================-->
        <div class="dkdg">
          记录
    </div>
      <div class="right">
        <table>
          <tr><td>兼容存储卡</td><td>记忆棒：Memory Stick Duo™/ Memory Stick PRO Duo™/ Memory Stick PRO Duo™（高速）/ Memory Stick PRO-HG Duo™/ SD 存储卡/SDHC存储卡/SDXC存储卡</td></tr>
          <tr><td>静态影像尺寸</td><td>[3:2] 20M（5472×3648）/10M（3888×2592）/5.0M（2736×1824）
            [16:9] 17M（5472×3080）/7.5M（3648×2056）/4.2M（2720×1528）
            [4:3] 18M（4864×3648）/10M（3648×2736）/5.0M（2592×1944）/VGA
            [1:1] 13M（3648×3648）/6.5M（2544×2544）/3.7M（1920×1920）
            [扫描全景]宽尺寸（12416×1856/5536×2160），标准尺寸（8192×1856/3872×2160）
            [在拍摄动态影像的同时拍摄静态影像][16:9] 17M（5472×3080）/7.5M（3648×2056）/4.2M（2720×1528）</td></tr>
          <tr><td>动态影像尺寸</td><td>AVCHD:28M PS（1920×1080，50p）/24M FX（1920×1080，50i）/17M FH（1920×1080，50i）/24M FX（1920×1080，25p）/17M FH（1920×1080，25p）/
            XAVC S 4K:25p 100M（3840x2160，25p）/25p 60M（3840x2160，25p）/
            XAVC S HD:50p 50M（1920x1080，50p）/25p 50M（1920x1080，25p）/100P 100M（1920x1080，100p）/100P 60M（1920x1080，100p）/
            MP4:28M（1920x1080，50p）/16M（1920x1080，25p）/6M（1280x720，25p）/</td></tr>
        </table>

      </div>
      <div class="c100"></div>
      <hr>
        <div class="dkdg">
          其他
        </div>
        <div class="right">
          <table>
            <tr><td>外形尺寸（WxHxD）</td><td>	132.5 x 94.0 x 145.0mm（CIPA标准）*14
              132.5 x 94.0 x 127.4mm (从镜头前端到液晶屏)</td></tr>
            <tr><td>重量</td><td>约1095g（含电池与记忆棒）/ 约1051g（仅主机）（CIPA标准）*14
            </td></tr>
          </table>

        </div>
        <div class="c100"></div>
        <hr>
    </div>

    </div>
    <!--==============================================================-->
    <div id="qqq" v-show="mura == 3" class="container">
      <div class="row">
        <h3>好评率 <span style="color: red;font-size: 30px">100%</span></h3>

        <div id="divstu">
          <ul>
            <form action="" id="forms"></form>
            <li><input name="fluit" checked form="forms" type="radio" @click="mu(1)" >好评（2）</li>
            <li><input name="fluit" form="forms" type="radio" @click="mi(3)">中评（1）</li>
            <li><input name="fluit" form="forms" type="radio" @click="mi(2)">差评（0）</li>
          </ul>
        </div>
        <div v-show="same == 1" class="m1">
          <div class="bbq col-md-6 col-xs-6 col-lg-6">
            <img class="img-responsive img-circle" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2782321158,1561883651&fm=26&gp=0.jpg" alt="">
            <p>初雪</p>
          </div>
          <div class="star col-md-6 col-xs-6 col-lg-6">
            <ul>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
              </li>
              <li style="width: 300px">产品名称：{{user.shopName}}</li>
              <br/>

              <li>拍照非常清晰！这价位找不到第二个了</li>
              <br/>
              <li><img  class="img-responsive imge2" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1654937742,1393289912&fm=26&gp=0.jpg" alt=""></li>
            </ul>

          </div>



        </div>
        <div v-show="same == 3" class="m1">
          <div class="bbq col-md-6 col-xs-6 col-lg-6">
            <img class="img-responsive img-circle" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3388479372,1706122097&fm=26&gp=0.jpg" alt="">
            <p>Nick杨</p>
          </div>
          <div class="star col-md-6 col-xs-6 col-lg-6">
            <ul>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span style="color: #cccccc" class="glyphicon glyphicon-star"></span>
                <span style="color: #cccccc" class="glyphicon glyphicon-star"></span>
              </li>
              <li style="width: 300px">产品名称：{{user.shopName}}</li>
              <br/>

              <li>价格太贵了，这价位感觉不值。</li>
              <br/>
              <li><img  class="img-responsive imge2" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3725372413,3701599562&fm=26&gp=0.jpg" alt=""></li>
            </ul>

          </div>



        </div>
        <div v-show="same == 1" class="m1">
          <div class="bbq col-md-6 col-xs-6 col-lg-6">
            <img class="img-responsive img-circle" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAEsASwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD22ffHESoy2OK5RrA69r32BstZ2bCW7b/npJ1WP6fxH8BXR+INU/szTWeJN91Kwht4/wC9I3T8O/0FP0HTU0nTY7cv5k5/eXEp6ySNyzH8f0rSM3FXMVTSLvkBeg9qUwnAwKnyDUTygHANQOUY9RiwEnngU9o1C+gpVkzUMsm5sDoKCfdSFBA6VIoVqrZNTQtzQyIy11Kmt3Y07Rb25Ay0cRKD1boB+ZFYnh63+xW1tbA/NGmGPq3Un86s+K5g4srTPDy+a49VTkD/AL62/lUejZeeRj2Fbwjam2VUfRG6HOetK7ljio+aWsTO7KOotvuNPt/+elwGP0RS38wKl1B/3arnqaryfvPEdsv/ADytpH+hLKP6Gn37ZdB7GritUBDbDdcJ9a1BWdZDM+fQVo06m4gooorMArPmP/E9tB/0xl/mtaFZc5z4ltF/6dpT+q04gahJpM0tIaEAyTmNvpWdBKyTKwOORWm4zkVkp/rVH+1/WtIWswRvtKPLBFcLoNyLa8nhzzBeSoR7bs/yauwOT9K80Fybbxjq8ROAblX/AAZQP6Vph43ui3O56mZSV60zefWoLaTzLaN/ValrnasyXJseHPTmsLxFBteDUVH+r/dS4/uMeD+Bx+Zrapk0STwSRSDKOpUj2NODs7hzGFp16ba5GT8hODXULIHGOoNcLFuXfG/34mMbfUf5zXTaddLJZB2OPLGGPsK2rxXxIu9jlPFlz9s11LQHMFiAxHrK3+A/nWDpWpHR/G1mxOLa8XyZR2BJ4P54/Op/Oa5ea7f71zI0pz6E8fpiuX12bddxhWwyDgjsc/8A6q8dVWqtz3KeHjKnynu8sJKMPyptplhtbqKy/CuvLrnh+3uc/vlHlzD0cdfz6/jWh9vjgvRDKAof7j9ifQ16EXeOh4zhyTcWcj4r0n+yr4alCMWVy4E69opD0f6HoffBqpBd3VvHsikKrnOM16FdRW9/Zy286LJDKpRlYZBBryq+uD4bu3028huZ/L5hlRd2+M9Mn16g/SuzD1OZcsuhE466HY6e41vxBNqkx/0LT8w23o0p++/4cKPxrT0y6N1HNdD7kkrBPdQdv9Kxr1otC0MWNr/q7WE5Pd39/ck1saXb/ZNKtYO8cSqfc45/WsJR924SnoafmYi9zUeaaOlLWRDdx24gU2iigQUoOKSobqUQ20kh/hUmmtWBy+pXLXetXEmcpCBCn16n+Y/KtXQRmKZ/9oD9K59M7AT95iWJ9zzXS6CuLBm9XNdlRctOw2zTFLRSE4FcRJm27B/El6epjgjT8yxp19zMPpVPRpPO1vWJP+mkafkgP9au3o/fA+orZK0hi2A/eMfar9U7AcOfoKuVnPcAooozUgFZLHd4qiH9yzYn8XH+FauayIzu8X3H/TOyQfm7H+lVHqBsUGiipARhzWSg/wBJA/2v61rn+GssD/Tcf7daU+oGjXlHiD9x48vh08yFH/ImvV68r8aqYvHMbf8APS3I/lXRhPjaEeiaFP5+mRnritOua8HT+ZpxTOcV0tc9Zcs2hhRRRWYjk9UX7P4idR925iEg/wB5Tg/pj8qjubw2ukX6BsGWPYPqSB/WrfiqIpcaZeD+GfyWPs4x/PFUP7M/tzUIdPYsLdCJrkqf4QflXPYkj9K6pvmonRSSbVzAllAgbyQ0hQdEQt/IVxN15klwxkyJCeQRg19HQW8NtAscMSRxrwFUYAqhqugaZrMJjvbOOQno4GHU+xHNeUsPbVPU9WnjuV6o8n8Fa8/h25lFyjyWc4G4RjJRh0bHfjrXpl01tq2lrd20iywsMqy9x/QiuFvvDMnh/WIopyZrGZtsU/p/st7/AM61II7nwpdCb5pNJuD+/XGdmf4x/X1FXSrOnPlkZYqlCt+8hudDomos0j2c7ZlTlSf4h2P+e9asttFM+6RQWxjJGa5O9D29ylxbENJEd8ZB++p5I/EV1djdR31nFcwtlJFzXfUjtKPU8qSaOP1J2uGtoCcm5uUQ+4zk/oDXaAYAHpXF2qfavF2mxdVgiluD+ij+ZrtsU6+6RLAdKWk6UuawAKKKKQBWbrj408oOshC/hWlWLrco8yGLuQSK0pK8gRhnqa6bRRjTU9yf51zbrgV02kDGmxfj/OunEP3AZeqG6fy7d29sVNVDV5hDZEnpmuSKu7AZvhr5rvWH/wCnoD8kWtS9HzKfasTwZN50equepvW/9BFb12Mqp9DWk9KgC2Y2w59TVjNRQDbCv51JzWUtwFopM0ZosAtY1j8/irV3/uQ28Y/Jm/rWvmsbRjv1fXpuxu1jB/3Y1/qTTitGwNiR9hQDu2KfVSZt17ap7s35D/69Ws0mA49FrOx/xMD/AL1aJ+4tUCP+Jifr/Srh1AuV5j8RF8vxTpkv96Mj9D/hXp1ec/E1NuoaLL6yFP5/41thX+8QmangWXImjz0NdrXnvgaTF/KmeoBr0KpxK/eAgooornAxPF8Rk8L3rrnfConXHqh3f0qTwnFnT5Lxl+e6cyZ/2eij8sfnU2ukDQdQyM7rd0/MY/mau6TCLfTYYV6IoX8hihy0UTqor3Wy7VS41SxtLqK2uLuGKaXiON3ALfSrdcb4l8Dy6/r9tfrqLQW67fOhwTu2nIxUN2NoJN2kdLqenQ6pp89nOMxyLwR1U9iPfNcdbX0r6dcaPqABubZjG2f4sdCPqOfxrvVG1QPTiuJ8ZWf2bVrTUUHE48iT3Ycqf5isMRDmjfqa0Je9ZmRY3Hlo9hI/NuN0THvEe34HP4YqL+35tNd4bDULBYWYuUlflWPUDHbv+Jqlr/lyRpfeSg8ptxj6gj+KsWTXCj7YLaHyx0z/APWq6WMapqNr2N/qKqNtHonhiPzvEGqXXaKKK3X9WP8AMV1tc34NTdp13df8/F5IwPsvyj+VdJXXVd5s8R7iN0pinJpZDhaYnJqLATdqM0meDSZpAKTXNatJ5mthP+ecefpnFdJmuQlfzvEF4eoUKv8AM/4VvQXvXBBNwtdLpYxp0P0rnJxha6PTeNOh/wB2tK/wAy5muc8WXPlWaJ3auhrifGlyDcxwhuV6j8KyoK8hEvw/ctDq3/X4T+grr5F3qRXG/Dv/AI9NVPreH/0EV2DvsXJp1/4jsA4cAClzim7uKQtWIDs0ZppNN3UwJNwrE8MnzLO9uP8AnvfTv+TbR/6DWpLL5UMkh6KpP5Csvwsu3w1Yk53SIZDn/aYn+tUloxl0SB9cKdorcfmzH+i1erBsZ/O1a8m7NceWv0UBf55rbDUSjawMmJ/dr9TVH/mIH6f0q4T+6U+5qoP+P1j/ALNKPUbLVcB8T0/daM/pd4/Su9zXD/E4D+zdKY9r1f5GtcPpUQih4Nl8vWlB4DLivTM15J4ek8vWITnHI/nXrXerxa9+4lsLmjNJRmuQHsZniI40G5b02E/99iteyO61Ujvk1nazAbnRL6FeWaB9v1A4p/h67F1pUbg54B/MVD3OukrwfqatNeRYwCxABOMn1p1RzwpcQvC4yrqVNMu2pIORWL4sgE/hq8bGWhAmX2KnP8s1iaZ4rk0fVD4f8RSeXOp/0a7b7lwnYk9j2Ndi6R3MDJIqvG64KnkMDSeqsXrGVzxXUL2Fo3w4KYIJ7fnXKRTZjAOCV4ya+hNWtrUabJCbeLyihBTYMYr561CA6fqd1ajO2OUheT07fpXK6XLpc9XDVuda6HvHhSA2/hXTVYYZoRI31b5v61r5pkMQggjhXgRoFH4DFONd7d22fNEcxwtJCck1HctjbTrc/LVW0AsA8H8KM0g6N9KbmoEKxwCfauNsD5up6i//AE2C5+iiutmbELn0Brj9EO43bnnddS/o2P6V00Vo2NF66X93n0rd00/8S+H/AHax5huiYe1a2mt/xL4fpRVd4h0Lma8x8U3Il1y4AP3Wx+gr0wmvHtWnMusXrE5/fNVYSN2xHV/Dl/3OqRn/AJ+d35qK6zUXKWUjDqvP5Vw3w5nVr7VolP3SjH67RXcX3zWkgPSlXX74ZLBN5kKt7U/NZWjz7rZVJ5Awfw4rRLVjKNmA4tSbqZupN1IRS1+4+z+H9QlHBWBsfUjA/nT7Qrp2hw7jhLe2BbPYBef5VneKmL6MLYfeurmGDHqC4J/QGpPEUuNJ+yqcG6dYB/uk/N/46DVqN7IZDoIby7cv99x5jfU8n+ddFurE0wAzE9ABx7VrbqqruDLRP7hPqarL/wAfTn2FTMf9Gj9yarKf3zn2FZIbLOa4X4puF0XTCT/y/wAf9a7bNcH8VI5LrStNt4v9Y9zlfqFJq6Wk0EVd2RhaTJs1GNvQ5r2LPWvENLnDzxuOhUn9K9qR9yhvUZrfGboViXNGaYDS5risFiDULjyLGRu5GB+Ncz4M1JIRLaM3EErQsPQZyv6EVr+IHIsFx/e5rzq0vTpuu3dyTiF5tsnoBgYb8DWrpOVLmW6OrCtJ8r6ntWQRkUVz+m6zsRYp8lf4XHYVuxTRzjckinPoa5k7msoOL1MnxD4a03xLZG2vovmHMcq8NGfUGuW0zTfGPhObyInXWNKH3Yy4WVB7E/yr0Kop5lhjLEgfWgcZvbc4vxvHqep6ZZpYH7OXf98kvDAY9u4NZdv4KttXlubq53b/ADdmRnnCqM9fXNb93c/abgtnhelX/Dkom0hZRxukc/8AjxFCinuaVKsqUFY0ycnJpuc9DUPnc1Dp0hk0+GT+/lvzJNa8tjywu2/eAe1SWx/d1Vu2/fGp7Y/uvxrVr3RFtDkkexqPdSxt+9UepxUZOMj04rOwCTt/o8n+6a43w4+7Tw+c7pZT/wCPtXXTt/o8n+6a4bwjJv0OE/7cg/8AH2rpor3WUtjpWOVIrR00/wCgR+2f51l54q/pxxaY9GNTU+EC678GvFL6XbqN8SeFuZOfox/wr2ZjzXiFypu9Qmtx1nu3j/NyP5VthGo8zY4xu7I6f4aQzW2rXDzcNfWwuQD2G8gfpivSLj5reQf7NcrZxra+LbAIoCNZSRAD/ZKkfpmupY5BFcntPaWmzbE0/Z1OVGJpkvlajPCehYSL9G4P6g/nW4WrmJm+zarbSdmYxN+PI/lXRbsgH2rWotTBjy1NLUwtTc+9Z2FYytVbz9e0a27LJJcMP91CB+rVX1ef7RrcEA+7bRGRv95uB+gNPicT+LLqUn5LS1WPJ7FjuP6AVm2kpuXuL09bmUsvsg+Vf0GfxreEdSkje05tvP8Aeb+Vae7isVXMUkEffI/xrV3VFTuJl2RsW8HuCarg/O34VJcHAhX0jBquDyayQ2WA1ct4oXz9e0KM8hGllI+i4/rXSBq5zVD5vi6yT/nnZyOfxYD+lTOXLFs3wsb1UjgbSI22sSWp/wCWcrp+HOP0Ney2cm+yt39YlP6V5TqsX2fxseOJdkg/EYP8q9M0t86RZH/phH/6CK6KkuenCXkTXjy1JLzNHdShqhDUu6uexgVtYhM+myheqjcPwry5mDTzEjIZz+WMV6zM4WCRj0Ck/pXlaJ5iNLjGSa7sI9GmVFm5bXD6SoSUM9ifuuOTD7Ed19+1bsEu9FkhkBVhlWRuD+NZcZBQYPGBVf7CInL2c8lqzHLCM5Rvqp4qKuFTd4nbGtpZnTJfXScCdh9TTJp5ph+9kY5rDWbWVGBPZyD1aNlP6Gq1/b6vd2cw/tBI32/KkCbQT6FjzWLoNLSJUZa6sS+1ZGvf7NtnBc8zMP4B6fU11vhBs+HIDjq79/8AaNeVafGltf28iAqHYow9z6/jXq/hQeX4Zsh/eUt+bGuClf2jv2Nsal7NW7kc1z5cMjk/dUt+Qq1pPGi2P/Xun/oIrA1acx6ReuOogc/pXQ2Q2adbKOghQD/vkV6FRWR5BWum/ftVi1b9z+NUrpv9If61YtGzCfrTkvdAthtrA+hzRNxM496iLU+c/Mrf3lBrIdiKXmFx7GvO/A027S54j1juZB+BOf616ExyCPUV554eRbC4VfupcweaP95XZT/StqUkk4mkYtpnXg8Vd09v3Tj0b+lZ6txVqxbDSL9DRNe6xWL+75q8j8O2/wBr8WRjGVilmnb8GIH6tXrAbmuB8BWobUdXuSOQ5hX/AL7Yn+lZynyUZ+h0YWN6iOguh5WqaRcf3bgxk+zow/niuhLVh67GYtPMo6wSxyj2ww/pmtjcDyOlcuHfuGuPV6iZh63CzLME4kGJIz/tDkfqK1bO5W6soJ1+7IgYVR1kEQrKO3U1BoFwDbzWveF8qP8AYbkfrkfhXc9YpnE0bJNIW9aaTWdrNy1vpUxT/WyARx/7zcD+dQhJXMZblxol7dpxPql0yReu3O0H8FUmrdnCA8UKDCrgfgP/AK1U5FX7dDap/qdPhEY95COT9cfzrW01PmaQ9uBXQnyxZTVhZm/4miAfw8/0rVBJOB1NYpOdUkb0ZV/r/Wty0XzLqNf9oVjU2QrFi9YC5ZR0UBarhqbczBp5H/vOcU0Gs0tAsTbqwsef4uvX6iCzijHsSzGtjdzWTpI86/1m5PO65WIH2RB/U1jiHamzrwcf3qZzXi2IQ67pd1jhleMn6EEfzNd1pZ26RZD0gj/9BFcn45gzpENxj5oZwQfTIIrrbUeXZwJ/djVf0FPDz5qCXa48bD962upbDU4NUAanBq0OGxDqs4g0m7kz0ib+VcVY24ZLaIjO7bkfXrW542u/svhK9bOGZNgP1qjoyeZeWme2GP4CuqjpBsaWlzUutDmgYvZNvXqY2PI+lZ7SPExWWNkYdQRXXA5rHuoxc6l0zyB+VOlXezEpMxjegcKCSegqSCO8vZhEinnrjtW9qMFvHbkJDGrnuF5wKTRFw0rewFW63ucyQcx5x4ms5NO1SaBM7pCskWO7ZwwH+e9es6PELXRrKAHiOFV9eg5rl9WC/wBu/MoPyMRnscj/ABrpNImEmnR56rla46lGy547s2qV3KCi+hyevuRoV5jvGRXXxcW8YHQIAPyrivEbY0G791H8xXZxt+4Q/wCyP5VtWWiOdmZdt/pL/WrFk/yMPeqd43+kv9alspMMR7USXugXyakkO61ibuCVNQFvSpI/mtJl/ukOP5VzstIizXDFY10/S5gw/czyW0uDyFdmH/oQWu2zg1zJ0uG+0LUYvLUzRXM3lvjkENuHP5VM5crjLzOzDRupLyLtnMZYcN/rEJRx3BH+PX8au2zbbkD+8K5Vbw2k9jPHcbY78BSJRkBwOPcen5Vsfa7m3lRprRmUH70Lbh+XWumWpk4tG/nmsHwTY+Va3bEcyX8p/JsVfj1aykfb5wR8/dk+U/rU/hBci6Xg7LuU8e7Z/rXFXvyG+H927LuvWXnWl1GB/rImA/Ks7T7oXFlbN/fgVs+vTNdTdRiSPOOlcRbA2cM0Z/5cbl0P/XNjn9AwP4VnQ0uh1P3kU+xoX0fnWcqd9pxXLWF39j1a2YnCTZhfPqeV/UfrXXZz9P6VwniW3aGKdUO0q6shHUc8V3U3dNGMYXdjuiaxNWuVW8Rm5is0M7L/AHpD8qL/ADNXtPvvtenJcSjY4BEo/usOtYbZvLw7vuh/PkH+1j5F/BefxqYu7GqbTdx1pC0UAEhzK5LyN6seTW/ax+VAi9+prOt4/MmUEcdTWoxwpPoM1pUmtiHEyA2bwNn785/w/pXS2B2PLN2jjJH1NcqhzLaevmgn8ea6j/U6Z/tTv+grOctEVKFjPmf51WrGapt81z+NPvbkWljNcE4EaFv8KTewKm2yS3k3rJLn5S5APsOP5g1F4Yh8zSfNI5uJpZT+LH+gFU7SQxeGUlb732cuT7kZ/ma6jQbH7No9rGRykCg/XHNcuJ1jynRR/dts5PxjHv8AD8i/3pYx+bCt4ccenFUPEkO6wgVsBWuowc+zZpX1a0Vyiy+Y/wDdjG4/pRhP4Y8U02rGhupwNZwurub/AFNrsH96ZsfoOaEjlmndJrhiUA3LGNoBPb1rqOHl1Ob+JU5bRbe0U5aaXJA/uqu41reHIsusn9yFR+JrL8Q2sc9xfMqDZZWLLnr88n/2I/Wug0OPy7In1IH5CtY1FyuK6Fzg4wXmbG7AzWfafvL0ue2TViV9sTH2qCy/dRSSn0/lSirJnNYZezeZeGMHhUI/HGataQu21Lf3mrHt5PNv1J6uW/ka3bNTHaxp3C1dRcseUTOd107dcj90b+lX9MvfJtSn+0T+grO8RnbrVt7o38hVaOYouM966IR5oIfQZ4k50G5+g/mK7GFs2sX+6P5VxviL/kAXfsmf1FdXbSBrKE+qA/pWVVe6D2KV7/x8Go4JNki5OMmn3v8Arc1RmfZEZB1QhvyOaS+EaRvK2VBqazIM+zPDqVqlBIGTg59KmRzHIrj+Eg1zSVtDRIQ+neqOlDF1qyelzv8AwZAa07tQl04HQncPoazLD5da1JP78cUn6Ef0rmr6wZ24ZWkc/c6XH/ai6XMuYo7gsg9Y5EJGPocj8Kv2zyxb7K5JM8Iyrn/lonZvr2Pv9aveJ7c282laso+UMkMp9BuyCf1H41qahoh1C13xMI7mL5on9D6H2PehVmmuzRs1FxaZUeGG6hHnRJICP4hmszRvC8c+oai1pf3dhJHMNpgf5cFQeVPBq7p87SxPHIhjuIW2Sxnqp/w9K0/Dvy6xqaeoib9CP6VUpu2jMnFJMh+y+LtPGI7yz1OIfwyp5b/zx+tYNzqFzFqN4dR02S0a5hBK7tykqCpOfTGK9JwM5rn/ABRb5t4boD/Vlo2/3WGB+uKiFW71RnFdLnMaLrEU+kwG4ZllRdjZBIOO+azvE8ltc27eVIruVwwXtz3rSPh2DT/sMpj2x3EKxybCVxIBwePX+lSapaW0Gi3CpGqKq7uB1I/nW3PHdGsYvmTK+pl7G6eOFMpeAEITyHHHP1GPyNJDb+RGE3bnJ3O/95j1NaFzo82oRS30q7bhgDbqf+WQHIH1Peqtm32pVOME8MP7pHUVnh6uluqN6sE9UXLSLYhYjlqW9fy7Gd/SM/yqwBgADtVHV0eXTZIYvvykIv1zVOetzCNO8kikyFNSskHR3C/iAf8AGui1CQK6xrysK7cD171kWUIvFguHOwQgSE9w2MD9auO7MjF/vnr7mhy1HOKb9CjHf2q3BEkoRhk7WGDVXVdTs3jihkZjCX3SHacYHIH4nFaJs4blCJ41Ydj3H0NJomiWlzqElyYBIEfZG0h34x94jPTnj8KJ1IRV2EYtO5mLczXOjQW1raO7SKkSkkAHoOv510i2Piq9jxLf2umxYwUgTzH/ADPA/WnaVbBtQhQfcgZzj6EgV1GARWcp22M57nnN94Xt7a9083N1dXs0jszGeTIwo7DoOSK1ooYoE2xRqi+ijFTaofM18KOlvb4/Fz/goqGWVIYmkkOFXrVQk+VXKcL2INQvxYW3mBDJKx2xRL1dj0FUPD6XFumom8l3zfaN0jdgdikgew6fhWxY6TJJINQvF/fMMRRn/lkp7f7x71mXCswu7WHia8vDCv6An8ADUqrduJXso8tildKT4Wvrpx894S/4MwVR+WK3bFfLtI19qg8T26waXbWsYwrzRRgewIP8hVtBtRR6CtKDvFvuzPFWtFLohLlv3WPU1XvJPIsFjH3nqy67yvsc1k6ncAzHn5Ixz7etdlNXdjhsM0r97rUSjopA/PmulBrnPDAL3sUrDDOS59s9B+AwK6DPP406usiJHL+KXCavYsemx/5VSzU/jM/6XZ/9cZT+lU1YFQc9Rmuyj8CBbFrxCu/w9qA/6YMfyre0yYS2EBB48lD+lZGqJ5mlXiH+KBx+hpfC9z5mmWRJ+/aRt+QANYzV4j6GpdnLfhVCbmGQe1Xrnr+FUmGQR6jFRHYtIfol15tuqsfmQmNvw/yK2Ca5DTpvsmrtGThZhkf7w4/liutDZUH1rGsrM0SLU532sEvcfIx+nSsqD5PEgH/PW0I/FWH+Natt+9gmg7kb1+o/+tWTN+61nTJuzO8J/wCBKSP1ArjmrpnVR0Z0d7py6p4eltGHMkR2n0bqD+dT6RIZ9Kt5WHzsg3D0Ydf1qxZ8WqD2plnB9mM0f8BkLp7A8kfnmuZP3bCk3doy9a0aSedL6ywl2i7SCcCVf7p/oe1UNBuA3iJ+GQyWuGjYYKsj8g+/zV1hGaptpUB1OLUFXbOispI/iU9j+Qq1LSzDm0sy/WXrRil0y5t33KXjO0lTjIGRz9RWmOBQVBBB6VNyFuZLwR6j4dEZYAtCpVv7rAAg/ga5O43XumTSzLtCRsPL/wBsdSfx6V3EVikcSocbQScAYB54zWBrtj9nlmdB+7uUbPs4H9R/KqUtTelJc1jct4VktUBGQ0Y/lXL3dr/ZerlyMQ3JwT/dk/8Ariuq0pvM0q0fuYUP6Co9V05NQtHifjcOo6g9jWVuV3Q4VLSaezMA1Ft339nH6yE/kDTLZ5Nrw3C7biE7JB6+hHsRzVvT08zXbYH+BHb+QrV6o1do3ZT1GEadqFrZoCBcSmb2AA+7+eT+NPl7D860fEseb7THA+ZXf8Bt/wD1VmFw0uAMgEbj/dB6ZqovRCj70bjbh2gtcRjMr4RB/tHpXTabaRaXp0UbMF2rgse/qfxOaydJsmvNT+1SD9xbZEYP8Tnqfw6fnXSmFGwWUEjpx0rOerMqs/smNobI9zeyKGIErKGwcdSev41tkgVFb2626uB/E7P+ZzUeoT/ZrOaUclUJA9+364o3Zk5KUjl9/m3V5cueJJTg/wCyvA/lVnSLE6nOLyYf6LGcwKR99v7x9vSoLLTH1MpE2Vso8CRv+ep9B7eprrUjWJFVAFVRgAdBVN6WNakkvdQ141C8gYFcl4ctjeapJeOPkt2cLn++7Ek/gMfnXS6tc/ZdPkkAy+NqD1Y8AfnTdH04abpkNsOWUZdv7zHkmktEzOMrRuYPilBLqumQ9hI0h/4Cv+JozS603m+KI1/542pb8WbH/stNzXTT0ikKpqkMmkEUTOewrltQl3hIM5ed9p+nUn8h+tbOqXAjTaTwOWrlraU3WpT3B5WIeWn1PLf0FehQjpc52jrvDy/6ZnHTArVzyaoeHlxIG9X/AKVcB5rKo7zZhI5fxaN+pWS+sE39BWXaOHs4Gz1jU/pWn4pbGp2p7razH/0GsLR3EmjWbA5/dAZruo/w0C2OomXdDIuM5Uj9KxvCcxTR9IY/88zE345H8wK3O4rlfDzsNBdR1t7iUD8HJFRa8WNHbXHKgj1qk1XCwkt9wPBAYVTasVsUjE1eNopRcIPmQ+YMfqPyrqdPuFubOORTkEA1jX0e+33Dqhz+FR+GrnypZbFj9w7k/wB09KiqrxN4nVwSeTOkn9081T1+P7Mnmr0hmjmQ+24f0Jpbi5S3Te+4+wGaxNa8VwS6W8BtnLhDHktjIxx2rhe5004vdHpNqB9mTHQipSQorxaX43SWFtHBHpCu8ahSXkPJ/Csq5+PuqscR6NaD/eZj/WsVSk9hSi09T3OXUYYjgrKT7Rk1Ul8R28XW3u2/3YGrweX45eIJD8mn2SD02sf5mq5+NXiU/wDLCyH/AGz/APr0/q9UaVPqe8HxXADxY3x/7YGk/wCErTtpl8f+2VeED4z+Iv4ktMe0X/16ni+NGtkjdHaH6xHH6NSdCqjROj2Pd7bxCLiRVNhdxgnG50wBV+6hjvrV4mxgjg+h7GvGNF+LNzd3KJdx2IRuMorqR/OvYtJnW7sorlGRldQco24fnUOMovUioofFEm0uGS20y3gl+/GgU/hxVvFIOlLSMr3MDWrDDC/hXLINsqjqyev4dfpmotGVH1YvnkQZXHTBb/61dEygoQay9P05rPVLhwMwtGAntySRVJ6FqfuNMq+Icm6s1VSzHcFA7k4FNm0eVdMW2ibFxPIjSygdMHJ/LpW49vG9zHMy5dAQue2alwMUc2gud2SRDDDFZ26xRjCIMAVmXHiOC3kKfZLxyDglYuKsareJYWMlzI0aqgz+8faD+NeQa18XLy1uHWzisDGp43K5J/UUlGUnoVCMXrI9P/4S63/58b3/AL9VXu/ENpexiJ7S/Ee4FgsJ+bHbNeMSfGvXudsNmP8Atn/i1QN8avE2flSy/wC/X/160VCoX+6XT8T3mDX7QxqkVndoFGABCQBWlb38dwOI5l/3kIr50X42+J1/5YWJH/XM/wCNWYvjv4hjxv06wf8A4Cw/rT+r1SJcn2UfQTRfa7tXbmKD7o9X9fwq50HtXz9B8f8AVUGH0SzI/wBhmH+Nadr8fncf6Roa59EmI/mKTozsZ8rO7nk8/wARanL2QpCPwXJ/UmnMwVSx6DmuN0TxtDemaR7R1e4maViHzjJ47eldBc30cltuQkDGWyMYrohF3SLnGxg+IL8ojkct1x6nsKr6bD9ntEQ8sfmY+pPWqFw5vtUCfwxne3+8eg/ma2oo8yRoOmQBXpwVkc8jsNFTyxAPYt+hNOGKksBtmAHRUb/0E1UmlEdtLJ/dQn9K5N5NnNI5HxTNsmadjnbp0r/m1Y/hnJ8PWgxyqlT+dXPGjBLoW572kUf5uSf/AEGqXh7jTCv92Zx+tejRXuJgux2neuQ8Jyia21EZyv22Uj6E10mpXItNMurjP+riZv0rlvCFsbNZoH+/JHFK31YHNRHYEdtpDmXTljY5ePdE34Hj9MU1utQaRJ5eqT256SKJV/8AQT/IVanXZM6+hrBqzsUiEgEFT0PWsKZm0+9juR/yyba+O6n/ADmt08VQ1KJSA5XKkbWFFjaLOgaC3voUaRA6kcZpLfRdJM22ayjMb/Kc5/Osvw3dkwvYSNl4PuE9Sh6f4fhW9XBUjaWpupNaGVaeCNCudE1OCbTITfW7TRCQ5z0yp6+hFfO1n5f2mYTxBivUHtjrX1tpTRSPM2R57KokH94DgH8uPwr5z+IPha68I+L5blISbC5kMsDgfKQfvIffrTw81GpqO/M2OXS7DqLSHB5B25p40+zB4tYf++BVKx1CNIlDMTbn7knXZ/st/jWosiOu5WUj1Br6CnySSaDUi+x2o6W0P/fsVVv4LZINogiDMRyEHrVt50GQvzN6DoPqawNRv/NysOZDnYpA++5449h0qa0oxQtT1j4MaLp+paFqNze6dbTgXe2JpIVJACg8HHvXr8MMcCbIo0jQdFRQAPwrm/h7oJ8OeCtPsJFC3BUyzf77cn/D8K6ivl6suabZO4UUUVmMKKKKBBRRRQBFNBFcRlJokkQ9Vdcg/hXjfxj0ix02HSJrWwt4I3ldHKRKuTgEZx9K9prjfid4ffX/AATdxQLuurYi5hAHJK9R+IyK0pS5ZpjTseGWUFtJbjNvEWHB+Qc1Y+xWp620P/fsVi6dfhSodtgY4DHoG7g/XH51uJMh+U/I390/09a+ppSjNaDIjp1metrD/wB8CmSabp6ozNaQgAZPy1baREXczqB6k1k6hqEbQk8/Zh9445lP90e3qac3CK1AwJI0k1S1ghhCmQou0D1Ir6VvPAnhSw0OW5Oi2xeGAsW5ySF/xrxz4XeFLrxN4wi1W4iP2C0k86RyOC45VB+OPwFe+eLZCNBa3X71xKkI+hYZ/QGvnsRPmqe6PqcfZeHdKt9PhLWUe4RgseeTis/V5YNPs32IFBGSBXQ3coB8sHhetcPqc4v9UKdYYDl/QnsP610UYa3CUiTR7diDLIMuxLv9T2/Ct2yj3X8I9DmqemxlbKNm+843GtTTEzf5/uqTXW3oc02dFbHaZm9IXP6VjXMu+OOHP+umRPwyCf0BrUV9sN0fSA/qQKwVYyaxYxddpeQ/gMf1rnprcwkcj41dpPGbJn5Y7ZDj3Of8aZoDYs5h6Tt/Sm+JyH8VahID02R/ko/xpmhn/Rp/+u5/kK9Kmv3aJjudL4n+bRmgHWeRIvwLc/pmqtuBF4iCjgSW2B/wFv8A69T61IJp9MiGRunLsD22qev4mq858rWtOl7M0kR/Fcj9VrOK90pGhHP5OqWt0ThY7g28n+64AH67a3dRXbPu/vDNYEtv56ajAOCxDKffaMH8xW0tz/aGjWt53ZRuHoehH55rnnumBWPSmSIJYmQ96eelMzjrScTWLMRZ3sL6O5QHzIc7lH8SfxD+tdrFMk8KSxsGjdQykdxXI6kmy6hlGMSBlP14P9DVvw/qAguf7MkYBXBe3z7feX+tY1YXVzZO5vPctYarp12GKx+cIJvTa/A/I4rote0DT/EWlyWGowiWFuRzgqexB7Gua1O3N1ptxCp+coSh9GHI/UCup0e/GoaRa3R6yRAn645/XNcFVaXL31R4D4i+HGt+FrmSWzjkvdPJyssQyVH+0B0Pv0rljKYm+dGhbv8Au/6dP0r6z3Ak1Tk0rTZpN8thbO3q0Sk/yq6eMnBWNL9z5ft9N1zXJRb6ZZXl4D/cj2oPr2H416v4C+EzabeQ6x4iMct3FzBaJykR9T6kfzr1WJI4YwkUaxoOiqMCpBipq4qdTQhiinZptFcwh2aKbRmgB1FJmjNAC0UmaM0ALSHkYozSZFAjx7x38JJbm7m1Xw1sV5SWmsWOFY9yhPAJ649a8ylsdX0lzBqVrd2ZB+7JDlfwz/SvqwsKhmjimQpNGkif3XUEV008VOmXE+VctI2UiaZ+3yH/APV+ldV4a+GeseJbqOfVEez08HJZxhnH+yP6mvdotO0+3bdDZW6N6rGAas7xTqYyc9C/JIg0fSLHQtLh0/T4RDbxLgAdSfUnufesXxTcA6jp0GeI985H0G0fzrog9cVrUpuPEN0+flhjWIfXG4/zFZ0VzSItbUxdb1A2Vk7rzPJ8sY9WNc1DCY7d0zubaWdvU96mvrv7fqcsg5it/kjHqe7VPbwn+z5JSOZGVF/MV7FONkZSdnY20Ty4UUdFUCr+lL80z/8AAapvz0rS0xdtru/vMT+FOXwnPNltm/0W/OeiIv5tWLpf77xBcP2hhVPxJJP6YrRL50y7c/xzIv8AM1n+GB5kFzdnrPMzD/dBwP0FZwVkzNvQ4XWGZ9c1B2OSbh/0wP6VNoY/0af/AK7H+QqleP5l3NIP45Xb/wAeNXtFytrL7zE/oK9OK9xEx3N+/Ak8R2y/88rZ3P1Ygf0qrqxMccE/eG4jc/TOD/OrX+s8Q375z5cUcf8AMn+lQ6rEZtNuUXr5ZI+o5/pWMdizUjbbqjj/AJ6Qqw+oOD/MVY0ZhHJqOlk8KftEP+6/UfgwP51mRXAkGlXg+7IPLY/765H6gVTW5ktPHH9os+LVDHYuP94Zz+DMKwlG6sI6A9aYanuU8u4dPQ8VAaS1Q4sytccR2ttMThUuU3fQ5H9azrmHF9aFnMbw3C4kH8OTtz+oNamtRLPpUsb/AHcqT7fMKq3MDXmjrL/y2RTHJj1Bx/MZqKkbxaOilKzTOusrxp4SsqhLmJtkqf3T6j2PUfWtTw/IlvDcWJyojlLqB/dbn+e6sCzZr/TbTWbZS0giAnQfxgcEfUEHFaFpcKdSt7hGzDOvlZHfuP1yK8mUuaJ2+zUXY6czfMAO9Is+SPQk/lVWRihLd8Ej+lC5Xp/CoA+tcpfIi+swLEZqdWrPjQ5xnt+uauoaaMpRJhS0gNLVGTCiiigCOaVYU3MeBTkYOgYdCMiorq2FzEUzjgipIY/KhSP+6oFAaWH0UUUAFNJp1MagERs1QNKM4zzUj1UeM8jvgY+tSzeCQNOQfbODSed1HpUEoLbsdWXP0IoQbm3fQ/pSNlFWLIuP3ZJx8o5riHR9RuHiUlTcO0kr/wB1Cf5kYFdFqdwbKydlBZ3Hloo6lj0rIvoxoegXM8uDOydR/ePAX8M1tCTim1uxKEb6nEFPtF/cCJNoknIRfRRwP0rauYxElnAv3fOUfXHP9Ki0eLzt160YjB4RM5xj3/CpLmRZNbs7cHJRHmb/ANBH8zXsUbqKT6HBWfvNltzgVroPIsFHcJ+tZW3zJUT1IFaWoSbYAo7mtpatI45PUo6tdfYfCFxcZ/jYj6hcD9TU2jItp4cibssG4n6LWT4rH2jQ9K0zPFy8ksn+4vP8wK0b2T7L4MmccbbIgfUripivd9WKWh5oWLJET1YZP481f0+6EEDKR1cms9uJY1/ur/gK0tLtDNbyOef3hx+Qr0WvdEjp7Ab7zVZv71yU/wC+VAqdkHKnoeDTNJGbSaTr5txK+f8AgR/wqeTAySQB6muWLKMawDP4XkhH+ttHZQO4Mb5H6AU2zi/tbT5p5PuXJkZB6ZOA316fTFSaFcQy6rqUUZJgnYSoSOG42sR7ZFS6HH5FnLZnrazvHj2zkfoRT6jNezuzqGlW1w/+uUGKYf7a8H/GnGqNk32TVLi0P+qvF86Meki8MPxGD+FXiKyStoSUtTXdptyP+mZIpunMDcTJ/BMqzLn/AGhg/wAqtyoHiZCOGBB/GsPRb4GOwd/lkhP2WYH0P3T9CQPzoktC4yOo8KSfYdSvdJYnY/8ApVuD2B4Yfgefxq3rFm2lgzwjFs7B/wDrlKDkH6GqWqQPaJDq9oM3FgTKF/56R/xp+I/UCuxsLmy1zSY7mApPa3KcDqCD1B968WrHkqN9Gd8KvNFEdvIt9aQ3Ef3ZFDVOIsHPvms7RLf+zLm50gkmOP8AfWxY9Y26j8D/ADFbYj56VzSjZmqqaEarU6ikCYqQChESkKKdSClpmYUUUUAFFFFABRRRQAGmmnUhoBELComSrJWmlamxopFIxc5pqw7e1XSlQzIzARpwW6t6CixftDL+y/bNQFw/+qgBWIHux6t+HT864v4iamPtVvpqN/q186UD1PCj+ZrvNW1Gz0DSZb27YJBCvC92PZR7mvEJbu41ieXULn/X3ku7H90E4UD6DFd2Do+0qa7IyqVbROzsFEOmW6ngLGCf51gaBcHUte1TUD9zCxRey5P+GaveILk22mraxMQ848vI6he5/pVTwwqxWkpReJpmUeyquK9eMNLnFKbZ01ku+8U/3Rup2oSZmC/3RUmngDzpT06VQuJhl5GPGaLXfoYXuyPV4s6pBnpDYogHoWJY/wBKZrs+fAqAdZlij/MjP8jVvWWVtXnwOF2p+SgVhatcB/CmmR5AzO+f+AlhRTWkSpHJB/MvJz2TCj64z/UV1OiRgacpPG5ia4nS7gXAupQcgzN/n9K7/To/K063UjnYD+ddjd4qwkaOmDbpNuR/Em788muW1/VpNRu4dJsXxFM5Esq9WUfex7ds96vXOprdWiW8BKWUKBXkHWTAxtX29+9ReHNO83Vru+lQbo1WJF7J3wPoMD65rnjpqUXVszp6W1+qlRAdrIB/yyPB/Lg/hV5lEGvuRjZeRBgexZeP5Y/KtF4ldGRhlWBBB71i5aK28t+Z9MlD/wC/Ee//AHzkfUVLd3cCxq0cn2VbmBc3FqwmQeuOo/EZFX45o7iFJoW3RSKGU/WlYA9DketZelH7Ld3OmNwEPnQe6MeR+B/nQwZqVyE9vIttdSW4Jnt5nXaP413bgPr6V2AHNYgHl6vqMXZmSTH1UZ/lTjq7Ci9TqdPmTUdHjcHKyxY/Mf8A165Dwzqd/wCD2byke5sSQ9xaj72D/wAtI/fggjvj1ra8ITFbe4sW620pUf7p+Yfof0qnfx7be1vgMBZZLaT6Fzt/X+dc06UZtwlsVCo4s9BF5aavZWus6ZMlwIiWBjOSUP3lPofb1FbSEOgdSGUjII7ivFrW4vdEvXv9IlEcjHMtu/8Aqp/qOx9xXovhfxdpusr9jybW+XJNpNw2P9k/xD6V5lfCzpb7HZGSeqOnxQBRxS1ytFBRRQDSAKKXNGaAEoqC6ufIj+WNpXP3UXv+Pai2n89MlGRhwyN1BoAnooooAKKKKLgBFJilzik3CmAmKztX1nT9B0977UZ1hiXpk8uf7qjqTWP4i8dWGiyNZ2y/b9SxxbQn7nu7dFH615Xrl3e39wb/AFa4+0XZyI414jgHog/qea68NhJ1n2RE5qKuyLxP4nvvFd6JZkMFqjbbS1z93PG9vVv5Vas7cC8s4APlDj8lGf6VjadEZ79Mj5YxvP17VsTy+SHKnEhjKqfTPU/lkfjXvQoxpQ5YnHKblqytql79s1CWfP7tPkj/AN0d/wATmtXw82FigOP3NsJH/wB6Rs/yFc68ZeMxrxuwg9snFdB4bRnk1O5IwskiJH/uhcD9CPzqpqySJv1OqU+Tpg/vOayZP9I1bTbBTzPOHk9o0+Zv5AVo3bfcjHRFA/GsnRm8/UtV1TqkERt4T+O0kfUk/lXO/hYorUnuJTNcyzHq7lvzNcNrOqrDoBTcN1u8+QexZsj9Ca7Q/dP0rx7xbdeUt1COss+fwAA/xrSVowv2NEryLHg9zc2kqdWaTn6mvWwoAAHQDAryf4bKHupUPJ3hh+GM16vRQlzU4tjatIwoyio8hAEFuSQo6Ej/AAro9AtGttIhMg/ezZmk+rc1gRQC8uLbT4xhJXG4f7C8n+n5127KF4AwKVSXQhEWKy9VjMJTUEUt5QKTKOrRHr+XX8618U1gCCCOCMVncZn2DBrNVDbvLOzcO4HQ/lis/V2a3kgv0GXtWy4HeM/eH9fwp1ojaVqj2bf8e067rdvQjqh+mePYCppiHzkZB9a1irgaKsJEV1OVYblI7g1kXg2a6G/562w/8db/AOuKl0SQpHLYOSWtj8me8Z+7+XT8Kj1fMeqadL2bzIvzXI/lSjpIlbj9Ik+y+JOfu3MeCPdf/rH9Kt6bJFq2n6lpEw8uUyzbCT1BY4Ye4NZVxJ9nmtbvOPJnUk/7JO0/of0rNsJ7h7950kaNo5pDGR/vHOfY9KJ0+Z3Q2tSwrOLLEoIlVtkgP94HBqPVkjfT2d15XBRu6H1B7GrGuSrLJFdxIVW5kAmQf8s5FGT+BGMfSqWrSY0tR3ZlH61rG0o2Y02tjb8O+PdX07bBfA6jaqOrNtmQex6N9Dg+9emaR4j0zW4t1ncAyAZaF/ldfqDXhtgMyP8A7v8AWr4BR1kRmR1OVdWKsD7EciuLEZfTl8GhpCu+p7uCD7Uua8u8K+MdYN9d2F2RfLbqkiFjtkZGz36Egg9cfWu+sdesL8iNJDHN3hlG1/y7/hXh1I8k3B9Dt5JcvNbQ06KQHPSlqSRKXHemmlFAC0UU0nBoAdmkJxWdea3Z2jmMM00//PKIbm/HsPxIrkvGOtatB4V1G9SY2Xlp8iwnLgkgct+Pb86IpOSRShJq50Gv+LtH8PIft11+/wAZW3j+aRvw7fjXlfiD4iaxrzG2ss6daN8u2NsyuPdu30H51xZkZ3Z3ZmdjlmY5JPue9bmhWXmSfaXHypwv1r6Gjl0Ka5p6s4ZV5N2ialhZx6dYiNQFJ+Zz6nuT61i6hcedMW/hHT6Vq6rcsmy2gRpJ5TtSNPvMewFbGj/DqK80xLjVbyb7RN82yBgEQdhyOfrXS5wpL3jKTcjA0aDZZ+a3DTHd9B2qW7QgFv4mwPoBXYN4IZIwlvqbqAMASRBv5YrOufBOuHBhvtPmx0WRHQn8RmpWJpvqBzCwnEIH3pJML+XX8/5V1GlRrFDJtHymY4+igAfyrIGl68mt+SdKjnltIwzJBcDaN3Q5bHPB4rY0wsdOiZ12s2WZc5wSTxmnKalqmD0RHrV49vZSPHzPKfLiH+0elTWluun6BHapzucDPqFHX8SapGyfV9UWTz3igtZfJjKAHfIRlzz/AHV/U10E3h22dIYpbq9YRpjAmK5JOTnFcVbExhLlOqjhpTVzIYhQS3AAya8A8Q3f2vV5yrfIHbH4mvfX8KXN3c6haWmovBZBVGHXzJAzDkBieB0plj8EvDTPm4lvZmJyTvCg/kKKteNSlvYidqM2mebfC20Zrq6nIOEUjOPXH+Br0ae/traTZK6hiM9a2rP4ZaBoeqRpELprC5UqYWnYKJByCcYzkZFa0ngDw4XONJtCP9tNx/OlDF04QSMZz1ucr4RtPNuLq/YcIBBF/Nv6D8K6RxzTdI0/+zNIt7Q/fVQZD6ueT+tSuvNaSlzO4IgIphqVhgVC5wKaGZ+pQpcW/luSDncrDqpHQis+CZpFZJQBMnDgfzHsavXEm5z6CqUsZZhIh/eLwP8AaHoa6YKyGRyubS6gvV6IdkvvGev5HB/OrHiLC2MFyOkNxG+fYnaf503CyxlWX5WGCp/lVeZvt3hnULHeGmt4yme/Ayp+vH6UpLW5L3MHWr573zbe3YrGincw9ccVf0GJ10mGaTmSVdxP1rOsbUS2LuAfKWIsT6nGfzzXQWsfk2EEXTZGo/StWNamHrd7KmpQWsMhUGIu6jo2Dxn9aNVlD21ko6M2f0zWTeymfxLLMDlQpjX/AIDj+pNX9R4ubZOyxl8eh4H+NUloiWT6aQC7H0FXS4rMs3ARyPXFWPNoktRdDZ8NbV8Tu3eS0K/XDZ/rXZS28M6hZY1cds9R9D2rhfCs6SeMra26s1vIT7DjFel/YlPIyM18tmEbYiVj6LBVF7BKRUt7zVLEj7Pd/aIh/wAsbo5I+j9fzzWlB4ts8iPUI5dPlPAMwzG30ccfng1ELH3p4sgylWwwPBBGa5VKSCrSpS1Whuwzx3EYeKRJFPIZDkGlmnitojJPKkaDqzsABXLp4ds4pvOgEtrJnJNtK0YP1AODUi+H7Dz/AD5kkuZc53XMrS4+gYkCqUjldGz3LcnieGZimlwSX7jgug2xL9XPB/DNVpE1K/H+m3flRnrDakqPxbr/ACq+F2qFAwB0AFLtyaGzSNNIrW9nBbptiiVB7DFY3jq2M/gbV40XJEG4D/dIb+ldGBUV1Al1Zy28n3JEKN9CMURlytNFy1Vj5ysUF3cRxK65buTjA9a7US2thaBRKgSNegYZJrt/DOnadc6aLW/021N/ZE283mQruOPut05BXBzWxc6FpEdqxTTLMY54hXr+Vex/ara1j+J56wava5wuk6ZFa20l7NPDLq94RBCiOGNurcEADvjJJ9sV28U9sGFtE65QbQo7AViw2Vs/iSFIIIo1s4TK5RAPnf5VH5BjVq30qWK9EjONinOR1NZurKolJ9TjxEPZTcE7mviigVBfSNFYzuv39hC/U8D9SKDHmMqwfy7DVtVbrO8kin/YQbV/9Bz+Nc48jWekQhFBnZFSNT3c8AfnXTaxH9j8Ky20XXylgH/AiF/rXPXUEkhN2oUxW7eVCp/jlP8AQD+tdEKihBzNIxc2kjR06zjtZktkbfHaLsaT+/K3zSN/IfnWkZdzFievNZ9ogtrdIVYttGCx6se5NNupWkCWsR/ezsIxjsD1P4DNePKrzyv3PejTVOHoamkYe0e5x/x8SFx/u9B+gB/Gt+DZbQCSZgoPTNZ1rEu6K3iGEQBR7AVoahZNdRp5bAFOx711uySieDWnzzckJqkFtfaNOJVEsQQuMc8jnj8q5mz1bVbS1jjtRFeW5UNFLPKQ+0jgH1+tdZZ2xtrUROcnJJrk5NHu7OaSHT9Tgt7cOSIZrfzDHk5wDn7voO1Om1szJ8zWmhfaoHWrJFROK7EzYpuKpXMvlxk9+grQcdaxL5j52Owropq7GVicmkoqG7laC0mlTG5ELDNdQGfrOq/Y0+zwYa5ft/dHqaz/AA9MbbUMMS8cylJ2PfP8X4H9KyY2aaNZ5GLSzfO7Hv7fSul0KCP7Az7fmdipPtVtWiTe7sOtIgmjG3A5BaFvqGxVu+nFrZTTHpGpNQ2HzvdKxyBMG/HaDVPxUxTSNoPEkiq30zURKZzEAP2i1z991Yn6nBrS1Ns6jNj+BFUfqf61VgUHVLMdt5/lTr5ibu5J6+Z/QVqt7GfQlt3xEcetODzSzpbWsD3N1KcRQxjJY/0HqaoySskEIU43yBCfTJ617h4d8OabodirWkJM0qAyTSHc7+xPp7Vw43F+x0itTow9FVPeexxvhTwvLonim3e9lWXUpbaSabZ92NchVQfrXpAFc7pJNx4x16WTl4fIgT2Tbu/mTXSLXzU25Suz2lorIULTwKBS0iWxKSnUhoBCUUUUAFMal70hoGVvsyi8W6X5ZQNpI/iX0P8AOnXUx8gqe5qY1h+KriS18P300Rw6W8jKfQhaIq7S7islqReHf31tc6gw5vJmdT/sL8q/oP1rZqvYwJbWFvBGMRxxKqj2AqxXpJ9D5qpUc5uT6sUGoJ2V5YoSw+9vKk9QOR+uKnHb61zc/OoM+Tu39aL2JuaOuK8tpDDEu6SSZNuegxzk+wxn8K524uInukghbNrZgxoT/G/8Tf0/OtnxJdS2ulzTRNiRI2Kt6EgDP61yFuNgWMdBxXJjqzjBQXU9nKaSm3Nm9b+bdTCGBSzn8h7mrtpDFHdyTb1IjzCjn+Js/MR+Ix+Bq+0KaZ4flktRtkMeS565Pesi5iWO6hgUYjjjAUVhg1dub6GmY1nbkjpc67S4MKZm79K0qpaV/wAgyHJJ+XvV2uyTuzxY7CZ7Vg6taXD3vmQKSrICfr0/pW3n95in0J2ZSP/Z" alt="">
            <p>仲野爱</p>
          </div>
          <div class="star col-md-6 col-xs-6 col-lg-6">
            <ul>
              <li>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
                <span class="glyphicon glyphicon-star"></span>
              </li>
              <li style="width: 300px">产品名称：{{user.shopName}}</li>
              <br/>

              <li>我觉得ok</li>
              <br/>
              <li><img  class="img-responsive imge2" src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2949565017,2014527650&fm=26&gp=0.jpg" alt=""></li>
            </ul>

          </div>



        </div>
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "shoping",
    data() {
      return {
        mura:1,
        same:1,
        name: '',
        user: [],
      };

    },
    methods: {
      change(index,index2){
        this.mura=index
      },
      mu(index){
        this.same=index
      },
      mi(index){
        this.same=index
      },

      gwc(){
//         let  _this=this;
//         axios.get('http://localhost:3000/shoppingCart/getAllcar?ShopID='+`${this.$route.params.id}`).then(function (result) {
//           console.log(result.data);
//           _this.user = result.data[0];
//           console.log(_this.user);
// alert("添加购物车成功！")
//         }),function(err) {
//           console.log(err.msg)
//         }
        let shopid='';

        shopid=localStorage.getItem('shopid')+','+this.$route.params.id
        localStorage.setItem('shopid',shopid)
        alert('添加购物车成功！')
        alert(shopid)
      },

      getData(){
      let  _this=this;
        axios.get('http://localhost:3000/shop/shopGetid?id='+`${this.$route.params.id}`).then(function (result) {
          console.log(result.data);
          _this.user = result.data[0];
          console.log(_this.user);

        })
      }, function(err) {
        console.log(err.msg)
      },
      img1() {
        thiss=this
        $('#imge')
      },
      img2() {
        thiss=this
        $('#imge')
      },
      img3() {

      },
      pa1() {

      }
    },
    mounted(){
      $(document).ready(function() {
        $("#tohard").click(function () {
          $("html, body").animate({
            scrollTop: $("#px").offset().top
          }, {duration: 500, easing: "swing"});
          return false;
        });
      });
      $(function () {

      });
      $(window).scroll(function (){
      let wintop = document.documentElement.scrollTop || document.body.scrollTop;
      if (wintop>=800){
        $("#divsf").addClass('fi')
      }else{
        $("#divsf").removeClass('fi')
      }
    });
      this.getData();
      console.log('id value'+this.$route.params.id)

    }




  }

</script>

<style scoped>
  ul{
   list-style: none;
  }
  #z1 li{
    display: inline-block;
    width: 255px;
    height: 75px;
  }
  li{

    height: 50px;
    width: 200px;
  }
#dv1{
  position: relative;
  height: 670px;
}
#dv2{
  height: 600px;
}
  div #d1{
    /*border:1px solid #cccccc;*/


  }
.glyphicon.glyphicon-chevron-right{
  font-size: 45px;
  color: #5bc0de;
  float: right;
  position: absolute;
  right: 5px;
  top: 87%;

}
  .glyphicon.glyphicon-chevron-left{
    font-size: 45px;
    color: #5bc0de;
    float: left;
    position: absolute;
    left: 5px;
    top: 87%;
  }
  .ylt:first-child  {
     display: inline-block;
     width: 100px;
     position: absolute;
     bottom: 15px;
     left: 65px;

   }

.ylt:last-child  {
  display: inline-block;
  width: 100px;
  position: absolute;
  bottom: 15px;
  left: 180px;

}
  .ylt1{
    display: inline-block;
    width: 100px;
    position: absolute;
    bottom: 15px;
    left: 295px;
  }
  #d1 img {
    border: 1px solid #cccccc;
  }
  .cen{

  }
  #sh2{
    font-size: 22px;
    font-weight: 500;
  }
  p{
    font-size: 14px;
    color: grey;
  }
  #shoping{
    font-size: 14px;
    color: gray;
  }
  .but{
    width: 250px;
    height: 60px;
    font-size: 20px;
  }
  .btn:hover{
    background: cornflowerblue;
    color: white;
  }
  .btn:active{
    background: cornflowerblue;
    color: white;
  }
  .btn:focus{
    background: cornflowerblue;
    color: white;
  }
  #px{
    height: 50px;

  }
  #px p{
    font-size: 16px;
    color: darkgray;
    position: relative;
    top: 10px;
  }
  /*=====================================*/
  /*腰*/
  #divsf{
    height: 70px;
    border: 1px solid lightgray;
  }
  #divsf ul{
    list-style: none;
  }
  #divsf li{
    font-size: 18px;
    width: 120px;
    height: 40px;
    display: inline-block;
    text-align: center;
    border-left: #cccccc 1px solid;
    position: relative;
    bottom: -15px;
    float: right;

  }
  #divsf li span{
    font-size: 18px;
    position: relative;
    top: 10px;
  }
  #divsf li:hover{
    color: dodgerblue;

  }
  #divsf span{
    font-size: 25px;
    position: relative;
    top: 15px;
  }
 .fi {
    margin: 0;
    padding: 0;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    width: 100%;
  }
/*=========================================================*/
  /*详细信息*/
  #bigt{
    width: 150px;
    height: 45px;
    border-left:cornflowerblue 15px solid;
    font-size: 25px;
    font-weight: 500;
    color: gray;
    text-align: center;
    position: relative;
    top: 20px;
    padding-top: 5px;


  }
  #info hr{
    border: lightgray 1px solid;
  }
  #info .c100{
    height: 20px;
  }
  #info .dkdg{
    height: 30px;
    width: 200px;
    font-size: 18px;
    color: #cccccc;
    float: left;
  }
  #info .right{

  }
  #info td{
    width: 220px;
    height: 40px;
  }
  /*============================================================*/
  /*评论*/
  #divstu{
    background:#f7f7f7;
    height: 40px;
  }
  #qqq ul{
    list-style: none;
    position: relative;
    top: 10px;
  }
  #qqq li{
    display: inline-block;
    width: 160px;
    height: 30px;
  }
  .p90{
    height: 70px;
  }
  .bbq{
    margin-top: 20px;
    width: 100px;
  }
  .bbq p{
    text-align:center;
    font-size: 16px;

  }
  .glyphicon.glyphicon-star{
    color: orangered;
    font-size: 20px;
  }
  .star li{
    width: 500px;
    height: 30px;
  }
  .m1{
    height: 200px;
  }
  .imge2{
    width: 100px;
  }
</style>

