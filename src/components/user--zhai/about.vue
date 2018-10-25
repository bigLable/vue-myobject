<template>
  <div>
    <div>
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
      ></video-player>
    </div>
    <div class="text"><br><br>
      <span>在咔嚓，我们的使命就是成为一家激发和满足您好奇心的公司。</span><br><br><br>
      <span>我们在产品、内容与服务方面的无尽激情，</span><br>
      <span>和对创新的不懈追求，</span><br>
      <span>让我们创造出只有咔嚓才能提供的前所未有的、新的兴奋和娱乐。</span><br>
      <span>开创独特的新鲜文化与体验。</span><br><br><br>
      <span>一切所为，均为与您情感相系。</span>
    </div><br><br><br><br>
    <div class="person"><span>核心成员</span>
    </div><br><br>
    <div class="texiao">
      <div id="content">
        <!--特效部分-->
        <ul class="accordion" id="accordion">
          <li class="bg1">
            <div class="heading">翟昱翔</div>
            <div class="bgDescription"></div>
          </li>
          <li class="bg2">
            <div class="heading">张帆</div>
            <div class="bgDescription"></div>
          </li>
          <li class="bg3">
            <div class="heading">沈洋洋</div>
            <div class="bgDescription"></div>
          </li>
          <li class="bg4 bleft">
              <div class="heading">王琦</div>
          </li>
        </ul>
        <!--特效结束-->
      </div>
    </div>
  </div>

</template>

<script>
  import $ from 'jquery'
    export default {
        name: "about",
      data(){
        return{
          playerOptions : {
            playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
            autoplay:true, //如果true,浏览器准备好时开始回放。
            muted: false, // 默认情况下将会消除任何音频。
            loop: false, // 导致视频一结束就重新开始。
            preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
            language: 'zh-CN',
            aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
            fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
            sources: [{
              type: "video/mp4",
              src: "../../../../static/video/video.mp4" //url地址
            }],
            poster: "", //你的封面地址
            // width: document.documentElement.clientWidth,
            notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
            controlBar: false,
            }
          }

        }
    }
    $(function(){
      $('#accordion > li').hover(function(){
        var $this = $(this);
        $this.stop().animate({'width':'480px'},500);
        $('.heading',$this).stop(true,true).fadeOut();
        $('.description',$this).stop(true,true).fadeIn();
      },function(){
        var $this = $(this);
        $this.stop().animate({'width':'115px'},1000);
        $('.heading',$this).stop(true,true).fadeIn();
        $('.description',$this).stop(true,true).fadeOut(500);
        $('.bgDescription',$this).stop(true,true).slideUp(700);
      });

    });
</script>
<style scoped>
  .text{
    width:100%;
    height:400px;
    text-align:center;
    font-size:20px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC",Arial,sans-serif;
    line-height:30px;
    color: #87898d;
  }
  .person{
    width:1000px;
    height:70px;
    font-size:24px;
    margin:0 auto;
    text-align: center;
    border-bottom: 3px solid #929292;
  }
  .texiao{
    width:460px;
    height:480px;
  }
  *{margin:0;padding:0;}
  body{font-family:Arial}
  a{color:#444;}
  a:hover{color:#999;}
  #content{margin:0 auto;}
  .reference p a{text-transform:uppercase;text-shadow:1px 1px 1px #fff;color:#666;text-decoration:none;font-size:10px;}
  .reference p a:hover{color:#333;}
</style>
