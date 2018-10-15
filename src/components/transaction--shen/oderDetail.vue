<template>
  <div>
    <p>确认订单信息</p>
    <table class="table table-hover">
      <tr>
        <th>宝贝图片</th>
        <th>商品描述</th>
        <th>宝贝属性</th>
        <th>单价</th>
        <th>数量</th>
        <th>小计</th>
      </tr>
      <tr v-for="key in 2">
        <td>
          图片
        </td>
        <td>详细信息</td>
        <td>A7M3</td>
        <td>2</td>
        <td>￥100.00</td>
        <td>￥200.00</td>
      </tr>
      <tr>
        <td colspan=3 style="text-align: left">给卖家留言:<input type="text" placeholder="欢迎给我们留言！"/></td>
        <td colspan=3 style="text-align: right">合计费用:￥121.00</td>
      </tr>
    </table>
  </div>

</template>

<script>
    export default {
        name: "oderDetail"
    }
</script>

<style scoped>

</style>
