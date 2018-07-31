<template>
  <div>
        <Alert>
            <p>1. 默认的样式比较传统</p>
        </Alert>
        <xcollapse title="xcollapse">
            xcollapse 内容...
        </xcollapse>

        <xcollapse :open=false title="xcollapse">
            xcollapse 内容...
        </xcollapse>
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

