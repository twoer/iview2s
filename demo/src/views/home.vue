<template>
  <div>
      <Alert>
        <p>针对 iview 2.x 组件的不足，做一些补充。</p>
      </Alert>

      <Alert type="error">
        <p>iView 2.13.1 之后有一个，我个人觉得很致命的问题，那就是 
        select 展开时，去点击 其他的 select 或者 文本框，
        第一次点击时是关闭当前展开的 select，再点一次才是激活你点击的控件， 
        2.13.1 版本之前都没这个问题，2.14 对 select 做了重构后出现的，如果介意此 bug 的，请使用 iView 2.13.1 版本。</p>
      </Alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
</style>

