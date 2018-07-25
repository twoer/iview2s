<template>
  <div>
      <Alert>
        <p>1. fix current page 不在第一页时，page size change 时，会同时 emit change / page-size-change 的问题，现在统一执行 emit change。</p>
        <br>
        <p>2. 之前 page-size 不支持 sync ，现在已经支持</p>

      </Alert>
      <xpage :current.sync="searchData.page" :page-size.sync="searchData.pageNum" :total="listData.total"
      @on-change="loadData"></xpage>
  </div>
</template>

<script>
export default {
  data () {
    return {
        searchData: {
            page: 1,
            pageNum: 10,
        },
        listData: {
            total: 1000
        }
    }
  },
  methods: {
      loadData () {
            this.$Message.loading({
                content: '正在加载数据...',
                duration: 0
            })

            setTimeout(() => {
                this.$Message.destroy()
            }, 1000)
      }
  }
}
</script>
<style lang="scss" scoped>
</style>

